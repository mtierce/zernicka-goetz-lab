import SanityBlockContent from "@sanity/block-content-to-react";
import Link from 'next/link';

const RichBlocks = ({blocks, noH1=false}) => {
    const serializers = {
        types: {
            richBlock: (props) => {
                console.log(props);
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
                console.log(mark);
                if (mark.page._type == "defaultPage") {
                    return <a href={`/${mark.page.slug.current}`}>{children}</a>
                } else {
                    return <a href={`/page/${mark.page.slug.current}`}>{children}</a>
                }
            },
            document: ({mark, children}) => {
                console.log(mark);
                return <a href={mark.file.url} target="_blank" rel="noopener noreferrer">{children}</a>
            },
            mailTo: ({mark, children}) => {
                console.log(mark);
                return <a href={`mailto:${mark.address}`}>{children}</a>
            }
        }
    }
    
    return (
        <SanityBlockContent blocks={blocks} serializers={serializers} />
    )
}

export default RichBlocks;