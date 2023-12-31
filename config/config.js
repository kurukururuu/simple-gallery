require('dotenv').config();

module.exports = {
  "site": {
    "title": "Bookworm Next | Personal Blog Theme",
    "base_url": process.env.BASE_URL,
    "favicon": "/images/favicon.png",
    "logo": "/images/logo.png",
    "logo_width": "200",
    "logo_height": "34",
    "logo_text": "Bookworm Light"
  },
  "settings": {
    "pagination": 3,
    "summary_length": 200,
    "blog_folder": "posts"
  },
  "params": {
    "tag_manager_id": "",
    "contact_form_action": "#",
    "copyright": "Copyright © 2022 a theme by [themefisher](https://themefisher.com)"
  },
  "metadata": {
    "meta_author": "Themefisher",
    "meta_image": "/images/og-image.png",
    "meta_description": "Next Boilerplate"
  }
}
