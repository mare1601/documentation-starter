# Documentation Starter Kit

You can use this repository as a starting point to manage your documentation repo. Generally client facing for showing them how to interact with CMS etc etc

This example is built on top of [Gatsby.js](https://www.gatsbyjs.org) and can be hosted for free on Netlify


## Creating A New Site based on this starter

You can easily copy and deploy this repo straight to [Netlify](https://netlify.com).
Press this button below to authenticate with Netlify, you will then need to select or create a repo that will store the data etc in. Ideally you can start a new documentation site without needing to clone and run on your machine.

## Developing Locally
Need to change some styles? Or maybe add a new page? Clone your repo down and
Run the following commands in your CLI to serve your website locally. Note you will need gatsby cli installed.

```bash
yarn install
gatsby develop

```

You should be able to go to http://localhost:8000/ and see the docs homepage. 


## Editing the docs via CMS or Code

All the docs are written in Markdown in /src/docs. You can edit the existing pages or create new one with either of the following process:

### Option One (Comfortable Writing MD Code)

1. Create a new (or duplicate an existing) Markdown file in /src/docs/, for instance /src/docs/mydoc.md.
2. Add a [Front Matter](https://jekyllrb.com/docs/frontmatter/) at the top of your doc.
3. Make sure that the Front Matter follws this format.
```
---
templateKey: doc
title: About us
---
## What's that?
This is another page.

```
4. Write your doc in Markdown format and save it.
5. The document should automatically show up in your navigation bar

### Option Two (Would rather use CMS)

1. Go to http://localhost:8000/admin (or if deployed http://url.com/admin)
2. Use the GUI to save a file (Netlify CMS handles all of the Front Matter)
3. Netlify CMS will write these changes to the Git Repo
4. http://localhost:8000/<path_of_the_doc> to view it in your browser

## Why are we doing this?
This will make our documentation very easy to edit / get set up. Ideally meaning we are more likely to do it. It also means that if we write some documentation once for example how to login with wordpress, we can copy the MD file into this starter and it will be already included.

## Contributing
If you write a document page that you think is useful in the starter, open a PR and include it in this repo. If you think there is features you think we should include, open an issue. 


