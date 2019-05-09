# [ameyrupji.com](http://www.ameyrupji.com/)

[![CircleCI](https://circleci.com/gh/ameyrupji-com/ameyrupji.com.svg?style=svg)](https://circleci.com/gh/ameyrupji-com/ameyrupji.com)


Git hub repository for my personal website deployed accross muliple cloud providers (AWS, Google)

The aim of this website it to showcase my skills in all areas of the software development lifecycle which include and are not limited to conceptualizing, website designing, planning for a minimal viable product, testing, release planning, releasing, and documenting and user-facing technical and non-technical documentation.


## Prerequisites Software

- HomeBrew
- Parcel web package manager (Link: https://parceljs.org/getting_started.html)


## Branching / Deployment model

### Master and Develop are lifelong branches

- **master** - uploded to ameyrupji.com bucket accessable at http://www.ameyrupji.com
- **develop** - uploaded to beta.advisory.com bucket accessable at http://beta.ameyrupj.com

### Feature branches

May branch off from: develop
Must merge back into: develop
Branch naming convention: anything except master, develop or hotfix/*

Feature branches (or sometimes called topic branches) are used to develop new features for the upcoming or a distant future release. 

- **feature/{feature-name}** - uploaded to beta.advisory.com bucket accessable at http://beta.ameyrupj.com/feature/feature-name/ 


### Hotfix branches

May branch off from: master
Must merge back into: develop and master
Branch naming convention: hotfix/*

Hotfix branches are very much like master branches in that they are also meant to prepare for a new production release, albeit unplanned. They arise from the necessity to act immediately upon an undesired state of a live production version.

- **hotfix/{hotfix-name}** - uploaded to beta.advisory.com bucket accessable at http://beta.ameyrupj.com/hotfix/hotfix-name/ 

### Release branches
I am not following release branches for this repository to reduce complexisty of this simple webs0ite project

For more information about github branching model folloed refer this link: https://nvie.com/posts/a-successful-git-branching-model/

## Useful links to dependant repositories

- Infrastructure as Code: https://github.com/ameyrupji-com/ameyrupji.com-iac
- 

## TODOs:
- [x] Setup CI Build and Deploy using CircleCI
- [x] Build a basic cover page (coming soon)
- [x] Setup CI build to deploy develop branche to beta.ameyrupji.com
- [x] Setup CI build to deploy feature branches to beta.ameyrupji.com
- [ ] Release planning and releasing v1.0


