# TTI Mobile Apps
---

Clone this repository and launch Meteor:

```bash
git clone https://github.com/queso/tti.git
cd tti

meteor
```
=======
# TTi App Meteor repo

## DDP Setup

#Setting Drupal DDP on Drupal Site.#

Once you have a working Drupal site going:

### Download Module ###
`cd` to `sites/all/modules` and run `git clone --branch 7.x-1.x http://git.drupal.org/sandbox/bfodeke/2354859.git`. This will download the drupal_ddp module to you Drupal site.

git clone --branch 7.x-1.x http://git.drupal.org/project/password_bcrypt.git
git clone http://git.drupal.org/project/restws.git
git clone http://git.drupal.org/sandbox/bfodeke/2354859.git drupal_user_sync

### Install Node Dependencies ###
`cd` to the newly downloaded module folder (`sites/all/modules/drupal_ddp`) and run `npm install`.

### Run NodeServer ###
While in the drupal_ddp module folder, run `node ddp.js`

### Enable Module ###
Navigate to the *Modules* page in Drupal and enable the module. (http://yourdrupalsite.dev/admin/modules).

### Configure Drupal DDP ###
*Navigate to Drupal DDP Settings page to configure settings* (http://yourdrupalsite.dev/admin/config/development/ddp-connect)
- Specify `Drupal DDP node server URL`
- Specify `Meteor app URL`
- Select which content types you want to use with Drupal DDP.

