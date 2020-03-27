$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/feature/Testfeature.feature");
formatter.feature({
  "line": 2,
  "name": "ProductStore Website",
  "description": "",
  "id": "productstore-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Task_Management"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Login into Demo Blaze Website",
  "description": "",
  "id": "productstore-website;login-into-demo-blaze-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on LoginTab to nagivate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" with vaild and invaild deatils",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button and close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "productstore-website;login-into-demo-blaze-website;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "productstore-website;login-into-demo-blaze-website;;1"
    },
    {
      "cells": [
        "chandana",
        "chandana"
      ],
      "line": 13,
      "id": "productstore-website;login-into-demo-blaze-website;;2"
    },
    {
      "cells": [
        "demoblaze",
        "demoblaze"
      ],
      "line": 14,
      "id": "productstore-website;login-into-demo-blaze-website;;3"
    },
    {
      "cells": [
        "bltcts",
        "123456"
      ],
      "line": 15,
      "id": "productstore-website;login-into-demo-blaze-website;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Login into Demo Blaze Website",
  "description": "",
  "id": "productstore-website;login-into-demo-blaze-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Task_Management"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on LoginTab to nagivate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"chandana\" and \"chandana\" with vaild and invaild deatils",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button and close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepLoginPage.the_user_launch_the_Chrome_application()"
});
formatter.result({
  "duration": 9615475659,
  "status": "passed"
});
formatter.match({
  "location": "StepLoginPage.clicking_on_LoginTab_to_nagivate_Login_Page()"
});
formatter.result({
  "duration": 297108953,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chandana",
      "offset": 22
    },
    {
      "val": "chandana",
      "offset": 37
    }
  ],
  "location": "StepLoginPage.the_user_login_using_and_with_vaild_and_invaild_deatils(String,String)"
});
formatter.result({
  "duration": 3354745807,
  "status": "passed"
});
formatter.match({
  "location": "StepLoginPage.clicking_on_login_button_and_close_the_browser()"
});
formatter.result({
  "duration": 15298830193,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login into Demo Blaze Website",
  "description": "",
  "id": "productstore-website;login-into-demo-blaze-website;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Task_Management"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on LoginTab to nagivate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"demoblaze\" and \"demoblaze\" with vaild and invaild deatils",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button and close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepLoginPage.the_user_launch_the_Chrome_application()"
});
formatter.result({
  "duration": 11646628139,
  "status": "passed"
});
formatter.match({
  "location": "StepLoginPage.clicking_on_LoginTab_to_nagivate_Login_Page()"
});
formatter.result({
  "duration": 76616174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demoblaze",
      "offset": 22
    },
    {
      "val": "demoblaze",
      "offset": 38
    }
  ],
  "location": "StepLoginPage.the_user_login_using_and_with_vaild_and_invaild_deatils(String,String)"
});
formatter.result({
  "duration": 3299683032,
  "status": "passed"
});
formatter.match({
  "location": "StepLoginPage.clicking_on_login_button_and_close_the_browser()"
});
formatter.result({
  "duration": 15256595435,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login into Demo Blaze Website",
  "description": "",
  "id": "productstore-website;login-into-demo-blaze-website;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Task_Management"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on LoginTab to nagivate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"bltcts\" and \"123456\" with vaild and invaild deatils",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button and close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepLoginPage.the_user_launch_the_Chrome_application()"
});
formatter.result({
  "duration": 7339505605,
  "status": "passed"
});
formatter.match({
  "location": "StepLoginPage.clicking_on_LoginTab_to_nagivate_Login_Page()"
});
formatter.result({
  "duration": 85265741,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bltcts",
      "offset": 22
    },
    {
      "val": "123456",
      "offset": 35
    }
  ],
  "location": "StepLoginPage.the_user_login_using_and_with_vaild_and_invaild_deatils(String,String)"
});
formatter.result({
  "duration": 3268098837,
  "status": "passed"
});
formatter.match({
  "location": "StepLoginPage.clicking_on_login_button_and_close_the_browser()"
});
formatter.result({
  "duration": 15259501578,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "",
  "description": "Adding to cart of product",
  "id": "productstore-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@TC_02_Add_Cart"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "The user launches the Chrome browser of demoblaze application",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Select the product",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Click on Add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Accept the Alert message and close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepAddToCart.the_user_launches_the_Chrome_browser_of_demoblaze_application()"
});
formatter.result({
  "duration": 7721816734,
  "status": "passed"
});
formatter.match({
  "location": "StepAddToCart.select_the_product()"
});
formatter.result({
  "duration": 3114956871,
  "status": "passed"
});
formatter.match({
  "location": "StepAddToCart.click_on_Add_to_cart()"
});
formatter.result({
  "duration": 5101062473,
  "status": "passed"
});
formatter.match({
  "location": "StepAddToCart.accept_the_Alert_message_and_close_the_Browser()"
});
formatter.result({
  "duration": 6069900725,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "",
  "description": "",
  "id": "productstore-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@TC_03_contact"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "User launches the product store application",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "Click on the contact tab",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Enter the Contact Email as \"chandana@gmail.com\" and Contact Name as \"chandana\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Enter the Message as \"Application have good collection of products\"",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Accept the Alert message in contact and close the Application Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepContact.user_launches_the_product_store_application()"
});
formatter.result({
  "duration": 7188088852,
  "status": "passed"
});
formatter.match({
  "location": "StepContact.click_on_the_contact_tab()"
});
formatter.result({
  "duration": 1126023259,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chandana@gmail.com",
      "offset": 28
    },
    {
      "val": "chandana",
      "offset": 69
    }
  ],
  "location": "StepContact.enter_the_Contact_Email_as_and_Contact_Name_as(String,String)"
});
formatter.result({
  "duration": 3334186283,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Application have good collection of products",
      "offset": 22
    }
  ],
  "location": "StepContact.enter_the_Message_as(String)"
});
formatter.result({
  "duration": 2335636707,
  "status": "passed"
});
formatter.match({
  "location": "StepContact.accept_the_Alert_message_in_contact_and_close_the_Application_Browser()"
});
formatter.result({
  "duration": 4142891006,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "",
  "description": "To click on next page and select the product",
  "id": "productstore-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@TC_04_nextpage"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "User launches the demo blaze application",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "Click on the next page",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Select the product in the next page of mac",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Check the product and Close the BrowserApplication",
  "keyword": "And "
});
formatter.match({
  "location": "StepsForNextPage.user_launches_the_demo_blaze_application()"
});
formatter.result({
  "duration": 7977818227,
  "status": "passed"
});
formatter.match({
  "location": "StepsForNextPage.click_on_the_next_page()"
});
formatter.result({
  "duration": 86970758,
  "status": "passed"
});
formatter.match({
  "location": "StepsForNextPage.select_the_product_in_the_next_page_of_mac()"
});
formatter.result({
  "duration": 10134706595,
  "status": "passed"
});
formatter.match({
  "location": "StepsForNextPage.check_the_product_and_Close_the_BrowserApplication()"
});
formatter.result({
  "duration": 7068468842,
  "status": "passed"
});
});