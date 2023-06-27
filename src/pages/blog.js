import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout/layout";
import Seo from "../components/seo";

export const query = graphql`
    query {
        allFile {
            nodes {
                name
            }
        }
    }
`

const BlogPage = ({data}) => (
    <Layout pageTitle="My Blog Posts">
        <ul>
            {
                data.allFile.nodes.map(node => (
                    <li key={node.name}>
                        {node.name}
                    </li>
                ))
            }
        </ul>
    </Layout>
)

export const Head = () => <Seo title="My Blog Posts" />
export default BlogPage