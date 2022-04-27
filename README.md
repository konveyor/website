# Konveyor Community Site

## Contributing

### Prerequisites

Your system needs to have the following installed to be able to build this website:

- [Node.js](https://nodejs.org/)
- [git](https://git-scm.com/)
- [yarn](https://www.npmjs.com/package/yarn)
- [gatsby-cli](https://www.npmjs.com/package/gatsby-cli)

### Cloning the repository

1. [Fork this repository](https://github.com/konveyor/website/fork) into your own GitHub account.
1. Clone the site to your local machine:  
   `git clone git@github.com:your-username/website.git`.
1. Add the upstream remote to follow this repository's changes:  
   `git remote add upstream git@github.com:konveyor/website.git`  
   `git fetch upstream`

### Building the site locally

1. Run `yarn` to install all of the required packages.
1. Run `yarn run dev` to build and run a development server.

If the site builds successfully, you can access it at [http://localhost:8000](http://localhost:8000).

To clear cache files, run `gatsby clean`. This is sometimes needed to ensure a clean build.
