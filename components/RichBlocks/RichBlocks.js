import SanityBlockContent from "@sanity/block-content-to-react";
import { useEffect, useState, useMemo } from "react";
import getSlugById from "../../utils/getPageById";
import { dataset, projectId } from "../../utils/http";

const InternalPageLink = ({id, isDefault, children}) => {
    const [slug, setSlug] = useState();
    useEffect(() => {
        getSlugById(id)
            .then(res => {
                console.log(res);
                setSlug(res[0].slug);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    const link = useMemo(() => {
        if (!slug) return children;
        if (isDefault) {
            return <a href={`/${slug.current}`}>{children}</a>
        } else {
            return <a href={`/page/${slug.current}`}>{children}</a>
        }
    }, [slug, isDefault]);
    return link;
}

const getUrlFromId = ref => {
    // Example ref: file-207fd9951e759130053d37cf0a558ffe84ddd1c9-mp3
    // We don't need the first part, unless we're using the same function for files and images
    const [_file, id, extension] = ref.split('-');
    return `https://cdn.sanity.io/files/${projectId}/${dataset}/${id}.${extension}`
  }

const SanityFileLink = ({id, children}) => {
    let url = getUrlFromId(id);
    const link = useMemo(() => {
        if (!url) return children
        return <a href={url} target="_blank" rel="noopener noreferrer">{children}</a>
    }, [url])

    return link;
}

const RichBlocks = ({blocks, noH1=false, allBodyCopy=false}) => {
    const serializers = {
        types: {
            richBlock: (props) => {
                if (allBodyCopy) {
                    props.node.style = "normal";
                    return SanityBlockContent.defaultSerializers.types.block(props);
                }
                if (props.node.listItem) {
                    return SanityBlockContent.defaultSerializers.listItem(props);
                }
                if (props.node.style == "large") {
                    return <p className="body1">{props.node.children.map(child => child.text)}</p>
                }
                if (noH1) {
                    if (props.node.style == "h1") {
                        props.node.style = "h2";
                    }
                    return SanityBlockContent.defaultSerializers.types.block(props);
                } else {
                    return SanityBlockContent.defaultSerializers.types.block(props);
                }
            }
        },
        marks: {
            link: ({mark, children}) => {
                // Read https://css-tricks.com/use-target_blank/
                const { blank, href } = mark
                return blank ?
                  <a href={href} target="_blank" rel="noopener noreferrer" >{children}</a>
                  : <a href={href}>{children}</a>
            },
            page: ({mark, children}) => {
                return <InternalPageLink id={mark.page._ref} isDefault={mark.page._type == "defaultPage"}>{children}</InternalPageLink>
            },
            document: ({mark, children}) => {
                console.log(mark);
                return <SanityFileLink id={mark.file.asset._ref}>{children}</SanityFileLink>
            },
            mailTo: ({mark, children}) => {
                return <a href={`mailto:${mark.address}`}>{children}</a>
            }
        }
    }
    
    return (
        <SanityBlockContent blocks={blocks} serializers={serializers} />
    )
}

export default RichBlocks;