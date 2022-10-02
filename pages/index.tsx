import * as React from 'react'
import { domain } from 'lib/config'
import styled from 'styled-components'
import Layout from '../src/components/Layout';
import { queryDatabase } from '../lib/notion-client'
import { resolveNotionPage } from 'lib/resolve-notion-page'
import Link from "next/link";

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

// blog card styled component, title, cover, link, description

// Blog Grid columns 4 for desktop, 1 for mobile
const StyledBlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;


const BlogCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 2rem;
  border-radius: 10px;
  transition: 0.2s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  background-color: var(--light-navy);
  &:hover {
    transform: translateY(-5px);
  }
  cursor: pointer;
`;

const BlogTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  margin-top: .4em;
`;

const BlogDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 1rem;
`;

const BlogCover = styled.img`
  width: 100%;
  height: 8em;
  object-fit: cover;
  border-radius: 10px;
  filter: brightness(0.8) !important;
`;


export const getStaticProps = async () => {
  try {
    const pages = await queryDatabase()
    const props = await resolveNotionPage(domain);
    return { props: {
      ...props,
      pages
    }, revalidate: 10 }
  } catch (err) {
    console.error('page error', domain, err)

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err
  }
}

export default function NotionDomainPage({ pages }) {
  return (
    <Layout>
      <StyledMainContainer>
        <StyledBlogGrid>
          {pages.map((page: any) => (
            <Link href={`/${page.url}`} key={page.id}>
              <BlogCard>
                <BlogCover src={page.cover} loading = "lazy" alt= {page.title} />
                <BlogTitle>{page.title}</BlogTitle>
                <BlogDescription>{page.description}</BlogDescription>
              </BlogCard>
            </Link>
          ))}
        </StyledBlogGrid>
      </StyledMainContainer>
    </Layout>
  )
}
