# Documentation Starter Kit

You can use this repository as a starting point to manage your documentation repo. Generally client facing for showing them how to interact with CMS etc etc

This example is built on top of [Gatsby.js](https://www.gatsbyjs.org) and is part of a tutorial posted on Medium:

- [How we switched to documentation-as-code with Gatsby.js and Netlify — part 1/2](https://blog.squadlytics.com/how-we-switched-to-documentation-as-code-with-gatsby-js-and-netlify-markdown-hosting-1-3/)

## Getting started

Run the following commands in your CLI to serve your website locally.

```bash
yarn install
gatsby develop
```

You should be able to go to http://localhost:8000/ and see the docs homepage.

## Initializing the CMS

We use Netlify CMS as the way to edit and add the files. It generates markdown files and stores the files in the Git Repo

## Editing the docs via CMS or Code

All the docs are written in Markdown in /src/docs. You can edit the existing pages or create new one with either of the following process:

### Option One (Comfortable Writing MD Code)

1. Create a new (or duplicate an existing) Markdown file in /src/docs/, for instance /src/docs/mydoc.md.
2. Add a [Front Matter](https://jekyllrb.com/docs/frontmatter/) at the top of your doc.
3. Make sure that the Front Matter contains the _path_ and _title_ of your doc. The path is how people will get access to the page.
4. Write your doc in Markdown format and save it.
5. Go to http://localhost:8000/<path_of_the_doc> to view it in your browser.

### Option Two (Would rather use CMS)

1. Go to http://localhost:8000/admin (or if deployed http://url.com/admin)
2. Use the GUI to save a file (Netlify CMS handles all of the Front Matter)
3. Netlify CMS will write these changes to the Git Repo
4. http://localhost:8000/<path_of_the_doc> to view it in your browser

## Adding DocSearch

You can add search via DocSearch (Algoli) (you'll need to sign up first) by defining environment variables in your dev environment and in your build configuration when deploying to production.

Here's below a template for a dev environment set up using a .env.development file that you should put at the root of the repository. If you don't think search is necessary for this site just don't include variable keys

```
#.env.development
GATSBY_DOCSEARCH_API_KEY=<your DocSearch API Key>
GATSBY_DOCSEARCH_INDEX=<your DocSearch index reference>
```

Check https://www.gatsbyjs.org/docs/environment-variables/ to know more about setting up environment variables.

## Deploying

You can easily deploy this repo for free with [Netlify](https://netlify.com).
Press this button below to authenticate this repo with Netlify
