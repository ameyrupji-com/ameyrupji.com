# [ameyrupji.com](http://www.ameyrupji.com/)

[![CircleCI](https://circleci.com/gh/ameyrupji-com/ameyrupji.com.svg?style=svg)](https://circleci.com/gh/ameyrupji-com/ameyrupji.com)


This GitHub repository contains code to create static personal website deployed across multiple cloud providers (AWS, Google)

The aim of this website is to showcase my skills in all areas of the software development life cycle which include and are not limited to conceptualizing, website designing, planning for a minimal viable product, testing, release planning, releasing, and documenting and user-facing technical and non-technical documentation. I am using CircleCI to build and deploy my website using enterprise style deployment pattern by deploying feature branches.

Please feel free to use any part of this repository. If you find this useful please Star or Folk this repository. If there is any suggestion for improvement within this code feel free to shoot me an email or create an issue.  

## Prerequisites

### Installed Software 

- HomeBrew
- Parcel web package manager (Link: https://parceljs.org/getting_started.html)
- Web browser

### Editors 

- Visual Studio Code or Atom or any other text editor of your choice 


## Branching / Deployment model

### Master and Develop are lifelong branches

- **master** - uploaded to ameyrupji.com bucket accessible at http://www.ameyrupji.com
- **develop** - uploaded to beta.advisory.com bucket accessible at http://beta.ameyrupj.com

### Feature branches

May branch off from: `develop`

Must merge back into: `develop`

Branch naming convention: `feature/*`

Feature branches (or sometimes called topic branches) are used to develop new features for the upcoming or a distant future release. 

- **feature/{feature-name}** - uploaded to beta.advisory.com bucket accessible at http://beta.ameyrupj.com/feature/feature-name/ 


### Release branches

May branch off from: `develop`

Must merge back into: `master`

Branch naming convention: `release/vX-Y-Z`

Release branches support preparation of a new production release. They allow for last-minute dotting of i’s and crossing t’s. Furthermore, they allow for minor bug fixes and preparing meta-data for a release (version number, build dates, etc.)

- **release/{release-name}** - uploaded to beta.advisory.com bucket accessible at http://beta.ameyrupj.com/release/vX-Y-Z/

### Bugfix branches

May branch off from: `release/vX-Y-Z`

Must merge back into: `release/vX-Y-Z`

Branch naming convention: `bugfix/*`

Any fixes against a release branch should be made in a bug-fix branch. The bug-fix branch should be merged into the release branch and also into develop. This is one area where we’re deviating from GitFlow. 

- **bugfix/{bugfix-name}** - uploaded to beta.advisory.com bucket accessible at http://beta.ameyrupj.com/bugfix/bugfix-name/ 

### Hotfix branches

May branch off from: `master`

Must merge back into: `master` and merge `master` back into `develop`

Branch naming convention: `hotfix/*`

Hotfix branches are very much like master branches in that they are also meant to prepare for a new production release, albeit unplanned. They arise from the necessity to act immediately upon an undesired state of a live production version.

- **hotfix/{hotfix-name}** - uploaded to beta.advisory.com bucket accessible at http://beta.ameyrupj.com/hotfix/hotfix-name/ 


## Useful links to dependant repositories

- Infrastructure as Code: https://github.com/ameyrupji-com/ameyrupji.com-iac
- 


