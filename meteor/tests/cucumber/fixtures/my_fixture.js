(function () {

  'use strict';

  Meteor.methods({
    'reset' : function() {
      Meteor.users.remove({});
      Departments.remove({});
      Categories.remove({});
      Brands.remove({});
      Products.remove({});

      Territories.remove({});
      Regions.remove({});
      Divisions.remove({});
      Stores.remove({});
      Objectives.remove({});
      ObjectiveStatuses.remove({});
      Resources.remove({});
      MonthlyPlaybooks.remove({});
      WeeklyUpdates.remove({});

      Meteor.call('users/create');
      Meteor.call('departments/create');
      Meteor.call('categories/create');
      Meteor.call('brands/create');
      Meteor.call('products/create');

      Meteor.call('territories/create');
      Meteor.call('regions/create');
      Meteor.call('divisions/create');
      Meteor.call('stores/create');
      Meteor.call('objective_statuses/create');
      Meteor.call('objectives/create');
      Meteor.call('resources/create');
      Meteor.call('playbooks/create');
      Meteor.call('updates/create');
    },

    'users/create': function() {
      Accounts.createUser({
        username: "rep",
        password: "password1",
        emails: [{address: "rep@email.com"}],
        profile: {
          roles: { '5': 'rep' },
          uid: "50408",
          field_mgr: {und:[{target_id: "50407"}]},
          field_user_stores: {und:[{target_id: "150833"}]},
          field_territory_code: {und:[{target_id: "150269"}]},
          field_user_first_name: {und:[{value: "Rep"}]},
          field_user_last_name: {und:[{value: "LastName"}]},
          field_employee_id: {und:[{value: "18991"}]},
          field_shirt_size: {und:[{value: "XL"}]},
          field_phone: {und:[{value: "(123) 456-7890"}]},
          field_vehicle_vin: {und:[{value: "1ABC23"}]},
          field_gas_card: {und:[{value: "16089"}]},
          field_user_street: {und:[{value: "123 Test Lane"}]},
          field_user_city: {und:[{value: "Austin"}]},
          field_user_state: {und:[{value: "Texas"}]},
          field_user_zip: {und:[{value: "78758"}]}
        }
      });

      Accounts.createUser({
        username: "manager",
        password: "password1",
        profile: {
          uid: "50407",
          roles: {'4': 'manager'},
          field_user_region: {und:[{target_id: "150213"}]},
          field_user_first_name: {und:[{value: "Manager"}]},
          field_user_last_name: {und:[{value: "LastName"}]}
        }
      });

      Accounts.createUser({
        username: "divisional",
        password: "password1",
        profile: {
          uid: "50406",
          roles: {'7': 'divisional'},
          field_user_division: {und:[{target_id: "150208"}]},
          field_user_first_name: {und:[{value: "Divisional"}]},
          field_user_last_name: {und:[{value: "LastName"}]}
        }
      });

      Accounts.createUser({
        username: "corporate",
        password: "password1",
        profile: {
          roles: {
            '8': 'corporate'
          }
        }
      });
    },

    'products/create': function() {
      Products.insert({
        title: "Product Name",
        field_product_brand: {
          tid: "408",
          name: "RYOBI"
        },
        field_product_dept: {
          tid: "500",
          name: "25"
        },
        field_product_category: [{
          tid: "409",
          name: "ACCESSORIES"
        }],
        field_product_display : true,
        field_product_sku : "1000642559",
        field_product_image_link : "https://www.teamttipop.com/pdfs/MILWAUKEE%20APP%20IMAGES/2352-20_1.jpg",
        field_product_model : "2352-20",
        field_block_tag : "block tag",
        field_pnp_h_fact_tag : "pnp h fact tag",
        field_pnp_vw_fact_tag : "pnp vw fact tag",
        field_pnp_v_fact_tag : "pnp v fact tag",
        field_channel_card : "channel card",
        field_regular_fact_card : "fact card",
        field_on_board_signage : "signage 1",
        field_on_board_signage_2 : "signage 2",
        field_on_board_signage_3 : "signage 3",
        field_on_board_signage_4 : "signage 4",
        field_fixture_1 : "fixture 1",
        field_fixture_2 : "fixture 2",
        field_fixture_3 : "fixture 3",
        field_part_1 : [ "part 1" ],
        field_part_2 : [ "part 2" ],
        field_part_3 : [ "part 3" ],
        field_pk_info_link : "http://google.com"
      });
    },

    'stores/create': function() {
      Stores.insert({
        nid: "150833",
        field_territory: {id: "150269"},
        title: "6905"
      });
    },

    'divisions/create': function() {
      Divisions.insert({
        nid: "150208",
        title: "N000"
      });
    },

    'regions/create': function() {
      Regions.insert({
        nid: "150213",
        title: "AB00",
        field_division: {id: "150208"}
      });
    },

    'territories/create': function() {
      Territories.insert({
        nid: "150269",
        field_region: {id: "150213"},
        title: "AB01"
      });
    },

    'objectives/create': function() {
      Objectives.insert({
        status: "1",
        totalStores: "2",
        completedStores: "1",
        nid: "287494",
        title: "END CAP"
      });
    },

    'objective_statuses/create': function() {
      ObjectiveStatuses.insert({
        field_assigned_objective: {
          id: "287494"
        },
        field_assigned_store: {
          id: "150833"
        },
        field_completed: false,
        title: "END CAP"
      });
    },

    'updates/create': function() {
      WeeklyUpdates.insert({
        field_weekly_update_pdf: [{
          display: "1",
          file: {
            fid: "309",
            url: "https://tti-test.knowclassic.com:8443/sites/default/files/weekly_updates/Weekly%20Update%205_5.pdf" 
          }
        }],
        status: "1",
        title: "Weekly Update"
      });
    },

    'playbooks/create': function() {
      MonthlyPlaybooks.insert({
        field_monthly_playbook_pdf: [{
          display: "1",
          file: {
            fid: 314,
            url: "http://www.learntti.com"
          }
        }],
        status: "1",
        title: "JULY - PLAYBOOK"
      });
    },

    'resources/create': function() {
      Resources.insert({
        field_resource_link: ["http://www.learntti.com"],
        status: "1",
        title: "LearnTTI"
      });
    },

    'brands/create': function() {
      Brands.insert({
        name: "RYOBI",
        tid: "408"
      });
    },

    'categories/create': function() {
      Categories.insert({
        name: "ACCESSORIES",
        tid: "409"
      });
    },

    'departments/create': function() {
      Departments.insert({
        name: "25",
        tid: "500"
      });
    }
  });
})();
