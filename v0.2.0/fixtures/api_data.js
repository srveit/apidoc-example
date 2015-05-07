define({ "api": [
  {
    "type": "get",
    "url": "/define",
    "title": "Define",
    "name": "GetDefine",
    "group": "Define",
    "version": "0.8.0",
    "description": "<p>Example of @apiDefine and @apiUse</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "field3",
            "description": "<p>This is Field 3 (local).</p> "
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "field1",
            "description": "<p>This is Field 1.</p> "
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "field2",
            "description": "<p>This is Field 2.</p> "
          }
        ]
      }
    },
    "filename": "src/api_define.js",
    "groupTitle": "Define",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/define"
      }
    ]
  },
  {
    "type": "get",
    "url": "/test/escape",
    "title": "Escape Example",
    "name": "GetEscape",
    "group": "Escape",
    "version": "0.6.0",
    "description": "<p>Escape Example data.</p> ",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/escape/text\n<b>curl -i http://localhost/escape/html</b>\n<xml>curl -i http://localhost/escape/xml</xml>",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Example Response",
          "content": "HTTP/1.1 200 OK {\n  field_text: 'text-value',\n  field_html: '<b>html-value</b>',\n  field_xml: '<xml>xml-value</xml>'\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/escape.js",
    "groupTitle": "Escape",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/test/escape"
      }
    ]
  },
  {
    "type": "get",
    "url": "/test/escape",
    "title": "Escape Example",
    "name": "GetEscape",
    "group": "Escape",
    "version": "0.5.0",
    "description": "<p>Escape Example data - with comparison.</p> ",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/escape/text-old\n<b>curl -i http://localhost/escape/html-old</b>\n<xml>curl -i http://localhost/escape/xml-old</xml>",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Example Response",
          "content": "HTTP/1.1 200 OK {\n  field_text: 'text-value old',\n  field_html: '<b>html-value old</b>',\n  field_xml: '<xml>xml-value old</xml>'\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/escape.js",
    "groupTitle": "Escape",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/test/escape"
      }
    ]
  },
  {
    "type": "get",
    "url": "/example/",
    "title": "Example",
    "name": "GetExample",
    "group": "Example",
    "version": "0.7.1",
    "description": "<p>Extended usage of @apiExample with different example types.</p> ",
    "examples": [
      {
        "title": "PHP Example (new)",
        "content": "echo 'This is the content. (new)';",
        "type": "PHP"
      },
      {
        "title": "JS Example",
        "content": "console.log('This is the content.');",
        "type": "JS"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "PHP Success Example (new)",
          "content": "echo 'This is the success content. (new)';",
          "type": "PHP"
        },
        {
          "title": "JS Success Example",
          "content": "console.log('This is the success content.');",
          "type": "JS"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "PHP Error Example",
          "content": "echo 'This is the error content.';",
          "type": "PHP"
        },
        {
          "title": "JS Error Example",
          "content": "console.log('This is the error content.');",
          "type": "JS"
        }
      ]
    },
    "filename": "src/api_example.js",
    "groupTitle": "Example",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/example/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/example/",
    "title": "Example",
    "name": "GetExample",
    "group": "Example",
    "version": "0.7.0",
    "description": "<p>Extended usage of @apiExample with different example types.</p> ",
    "examples": [
      {
        "title": "PHP Example",
        "content": "echo 'This is the content.';",
        "type": "PHP"
      },
      {
        "title": "JS Example (removed)",
        "content": "console.log('This is the content. (removed)');",
        "type": "JS"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "PHP Success Example",
          "content": "echo 'This is the success content.';",
          "type": "PHP"
        },
        {
          "title": "JS Success Example",
          "content": "console.log('This is the success content.');",
          "type": "JS"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "PHP Error Example (removed)",
          "content": "echo 'This is the error content. (removed)';",
          "type": "PHP"
        },
        {
          "title": "JS Error Example",
          "content": "console.log('This is the error content.');",
          "type": "JS"
        }
      ]
    },
    "filename": "src/api_example.js",
    "groupTitle": "Example",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/example/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/group/:id",
    "title": "Group and Description",
    "name": "GetGroup",
    "group": "Group",
    "version": "0.5.0",
    "filename": "src/api_group.js",
    "groupTitle": "Group Title",
    "groupDescription": "<p>This is a Group Description. It is <strong>Markdown</strong> capable.</p> ",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/group/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/test/:id",
    "title": "Grouping",
    "name": "GetGrouping",
    "group": "Grouping",
    "version": "0.1.0",
    "description": "<p>Title and Grouping of param, success and error</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "param1",
            "description": "<p>No Group, automatically set Group to &quot;Parameter&quot;</p> "
          }
        ],
        "Replace \"login\" with this text.": [
          {
            "group": "login",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "param2",
            "description": "<p>Group &quot;login&quot;</p> "
          },
          {
            "group": "login",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "param3",
            "defaultValue": "Default Value",
            "description": "<p>Group &quot;login&quot; with default Value</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201 - Everything ok, replace \"201\" with this text.": [
          {
            "group": "201",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "success2",
            "description": "<p>Group &quot;201&quot;</p> "
          },
          {
            "group": "201",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "success3",
            "defaultValue": "Default Value",
            "description": "<p>Group &quot;201&quot; with default Value</p> "
          }
        ],
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "success1",
            "description": "<p>No Group, automatically set &quot;Success 200&quot;</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "error2",
            "description": "<p>Undefined Group &quot;400&quot;</p> "
          }
        ],
        "401 - Oh oh, replace \"401\" with this text": [
          {
            "group": "401",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "error3",
            "description": "<p>Group &quot;401&quot;</p> "
          }
        ],
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "error1",
            "description": "<p>No Group automatically set &quot;Error 4xx&quot;</p> "
          }
        ]
      }
    },
    "filename": "src/parameter_grouping.js",
    "groupTitle": "Grouping",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/test/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/header/:id",
    "title": "Parameters",
    "name": "GetHeader",
    "group": "Header",
    "version": "0.5.0",
    "description": "<p>Test for @apiHeader (same as @apiParam)</p> ",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "header1",
            "description": "<p>Parameter with type and description.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "header2",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "header3",
            "defaultValue": "Default Value",
            "description": "<p>Parameter with type, description and default value.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "header4",
            "defaultValue": "Default Value",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "header5",
            "description": "<p>Basic Parameter with description.</p> "
          },
          {
            "group": "Header",
            "optional": false,
            "field": "header6",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "header7",
            "defaultValue": "Default Value",
            "description": "<p>Basic Parameter with description and default value.</p> "
          },
          {
            "group": "Header",
            "optional": false,
            "field": "header8",
            "defaultValue": "Default Value",
            "description": ""
          },
          {
            "group": "Header",
            "optional": true,
            "field": "header9",
            "description": "<p>Optional basic Parameter with description.</p> "
          },
          {
            "group": "Header",
            "optional": true,
            "field": "header10",
            "description": ""
          },
          {
            "group": "Header",
            "optional": true,
            "field": "header11",
            "defaultValue": "Default Value",
            "description": "<p>Optional basic Parameter with description and default value.</p> "
          },
          {
            "group": "Header",
            "optional": true,
            "field": "header12",
            "defaultValue": "Default Value",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "header13",
            "description": "<p>Optional Parameter with type and description.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "header14",
            "description": ""
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "header15",
            "defaultValue": "Default Value",
            "description": "<p>Optional Parameter with type, description and default value.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "header16",
            "defaultValue": "Default Value",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/api_header.js",
    "groupTitle": "Header",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/header/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/header/example/",
    "title": "Header Example",
    "name": "GetHeaderExample",
    "group": "Header",
    "version": "0.5.0",
    "description": "<p>Usage of @headerExample.</p> ",
    "header": {
      "examples": [
        {
          "title": "An example:",
          "content": "curl -i http://localhost/header/example/",
          "type": "json"
        }
      ]
    },
    "filename": "src/api_header_example.js",
    "groupTitle": "Header",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/header/example/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/language/clojure",
    "title": "Clojure",
    "name": "GetLanguageClojure",
    "group": "Language",
    "version": "0.4.0",
    "description": "<p>Test for Clojure Comment-Syntax.</p> ",
    "filename": "src/language.clj",
    "groupTitle": "Language",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/language/clojure"
      }
    ]
  },
  {
    "type": "get",
    "url": "/language/clojure/indented1",
    "title": "Clojure indented 1",
    "name": "GetLanguageClojureIndented1",
    "group": "Language",
    "version": "0.4.0",
    "examples": [
      {
        "title": "Test for indented comment.",
        "content": "This is example line 2.\nThis is example line 3.\n\t\t  Line 4 indented (with tab at beginning).\n\t  Line 5 indented.\nThis is example line 6.",
        "type": "json"
      }
    ],
    "filename": "src/language.clj",
    "groupTitle": "Language",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/language/clojure/indented1"
      }
    ]
  },
  {
    "type": "get",
    "url": "/language/coffeescript",
    "title": "CoffeeScript",
    "name": "GetLanguageCoffeeScript",
    "group": "Language",
    "version": "0.4.0",
    "description": "<p>Test for CoffeeScript Comment-Syntax.</p> ",
    "filename": "src/language.coffee",
    "groupTitle": "Language",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/language/coffeescript"
      }
    ]
  },
  {
    "type": "get",
    "url": "/language/coffeescript/indented1",
    "title": "CoffeeScript indented 1",
    "name": "GetLanguageCoffeeScriptIndented1",
    "group": "Language",
    "version": "0.4.0",
    "examples": [
      {
        "title": "Test for indented comment.",
        "content": "This is example line 2.\nThis is example line 3.\n    Line 4 indented (with tab at beginning).\n    Line 5 indented.\nThis is example line 6.",
        "type": "json"
      }
    ],
    "filename": "src/language.coffee",
    "groupTitle": "Language",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/language/coffeescript/indented1"
      }
    ]
  },
  {
    "type": "get",
    "url": "/language/coffeescript/indented2",
    "title": "CoffeeScript indented 2",
    "name": "GetLanguageCoffeeScriptIndented2",
    "group": "Language",
    "version": "0.4.0",
    "examples": [
      {
        "title": "Test for indented comment.",
        "content": "This is example line 2.\nThis is example line 3.\n    Line 4 indented (with tab at beginning).\n    Line 5 indented.\nThis is example line 6.",
        "type": "json"
      }
    ],
    "filename": "src/language.coffee",
    "groupTitle": "Language",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/language/coffeescript/indented2"
      }
    ]
  },
  {
    "type": "get",
    "url": "/language/erlang",
    "title": "Erlang",
    "name": "GetLanguageErlang",
    "group": "Language",
    "version": "0.4.0",
    "description": "<p>Test for Erlang Comment-Syntax.</p> ",
    "filename": "src/language.erl",
    "groupTitle": "Language",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/language/erlang"
      }
    ]
  },
  {
    "type": "get",
    "url": "/language/erlang/indented1",
    "title": "Erlang indented 1",
    "name": "GetLanguageErlangIndented1",
    "group": "Language",
    "version": "0.4.0",
    "examples": [
      {
        "title": "Test for indented comment.",
        "content": "This is example line 2.\nThis is example line 3.\n\t    Line 4 indented (with tab at beginning).\n    Line 5 indented.\nThis is example line 6.",
        "type": "json"
      }
    ],
    "filename": "src/language.erl",
    "groupTitle": "Language",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/language/erlang/indented1"
      }
    ]
  },
  {
    "type": "get",
    "url": "/language/erlang/indented2",
    "title": "Erlang indented 2",
    "name": "GetLanguageErlangIndented2",
    "group": "Language",
    "version": "0.4.0",
    "examples": [
      {
        "title": "Test for indented comment.",
        "content": "This is example line 2.\nThis is example line 3.\nLine 4 indented (with tab at beginning).\nLine 5 indented.\nThis is example line 6.",
        "type": "json"
      }
    ],
    "filename": "src/language.erl",
    "groupTitle": "Language",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/language/erlang/indented2"
      }
    ]
  },
  {
    "type": "get",
    "url": "/language/javascript",
    "title": "JavaScript",
    "name": "GetLanguageJavaScript",
    "group": "Language",
    "version": "0.4.0",
    "description": "<p>Test for JavaScript Comment-Syntax.</p> ",
    "filename": "src/language.js",
    "groupTitle": "Language",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/language/javascript"
      }
    ]
  },
  {
    "type": "get",
    "url": "/language/javascript/indented1",
    "title": "JavaScript indented 1",
    "name": "GetLanguageJavaScriptIndented1",
    "group": "Language",
    "version": "0.4.0",
    "examples": [
      {
        "title": "Test for indented comment.",
        "content": "This is example line 2.\nThis is example line 3.\n\t    Line 4 indented (with tab at beginning).\n    Line 5 indented.\nThis is example line 6.",
        "type": "json"
      }
    ],
    "filename": "src/language.js",
    "groupTitle": "Language",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/language/javascript/indented1"
      }
    ]
  },
  {
    "type": "get",
    "url": "/language/javascript/indented2",
    "title": "JavaScript indented 2",
    "name": "GetLanguageJavaScriptIndented2",
    "group": "Language",
    "version": "0.4.0",
    "examples": [
      {
        "title": "Test for indented comment.",
        "content": "This is example line 2.\nThis is example line 3.\n\t    Line 4 indented (with tab at beginning).\n    Line 5 indented.\nThis is example line 6.",
        "type": "json"
      }
    ],
    "filename": "src/language.js",
    "groupTitle": "Language",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/language/javascript/indented2"
      }
    ]
  },
  {
    "type": "get",
    "url": "/language/perl",
    "title": "Perl",
    "name": "GetLanguagePerl",
    "group": "Language",
    "version": "0.4.0",
    "description": "<p>Test for Perl Comment-Syntax.</p> ",
    "filename": "src/language.pm",
    "groupTitle": "Language",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/language/perl"
      }
    ]
  },
  {
    "type": "get",
    "url": "/language/perl/indented1",
    "title": "Perl indented 1",
    "name": "GetLanguagePerlIndented1",
    "group": "Language",
    "version": "0.4.0",
    "examples": [
      {
        "title": "Test for indented comment.",
        "content": "This is example line 2.\nThis is example line 3.\n\t\tLine 4 indented (with tab at beginning).\n\tLine 5 indented.\nThis is example line 6.",
        "type": "json"
      }
    ],
    "filename": "src/language.pm",
    "groupTitle": "Language",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/language/perl/indented1"
      }
    ]
  },
  {
    "type": "get",
    "url": "/language/perl/indented2",
    "title": "Perl indented 2",
    "name": "GetLanguagePerlIndented2",
    "group": "Language",
    "version": "0.4.0",
    "examples": [
      {
        "title": "Test for indented comment.",
        "content": "This is example line 2.\nThis is example line 3.\n\t    Line 4 indented (with tab at beginning).\n    Line 5 indented.\nThis is example line 6.",
        "type": "json"
      }
    ],
    "filename": "src/language.pm",
    "groupTitle": "Language",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/language/perl/indented2"
      }
    ]
  },
  {
    "type": "get",
    "url": "/language/perl/podcut",
    "title": "Perl comment with pod and cut",
    "name": "GetLanguagePerlPodCut",
    "group": "Language",
    "version": "0.4.0",
    "examples": [
      {
        "title": "Test for indented comment.",
        "content": "This is example line 2.\nThis is example line 3.\n        Line 4 indented (with tab at beginning).\n    Line 5 indented.\nThis is example line 6.",
        "type": "json"
      }
    ],
    "filename": "src/language.pm",
    "groupTitle": "Language",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/language/perl/podcut"
      }
    ]
  },
  {
    "type": "get",
    "url": "/language/python",
    "title": "Python",
    "name": "GetLanguagePython",
    "group": "Language",
    "version": "0.4.0",
    "description": "<p>Test for Python Comment-Syntax.</p> ",
    "filename": "src/language.py",
    "groupTitle": "Language",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/language/python"
      }
    ]
  },
  {
    "type": "get",
    "url": "/language/python/indented1",
    "title": "Python indented 1",
    "name": "GetLanguagePythonIndented1",
    "group": "Language",
    "version": "0.4.0",
    "examples": [
      {
        "title": "Test for indented comment.",
        "content": "This is example line 2.\nThis is example line 3.\n    Line 4 indented (with tab at beginning).\n    Line 5 indented.\nThis is example line 6.",
        "type": "json"
      }
    ],
    "filename": "src/language.py",
    "groupTitle": "Language",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/language/python/indented1"
      }
    ]
  },
  {
    "type": "get",
    "url": "/language/python/indented2",
    "title": "Python indented 2",
    "name": "GetLanguagePythonIndented2",
    "group": "Language",
    "version": "0.4.0",
    "examples": [
      {
        "title": "Test for indented comment.",
        "content": "This is example line 2.\nThis is example line 3.\n    Line 4 indented (with tab at beginning).\n    Line 5 indented.\nThis is example line 6.",
        "type": "json"
      }
    ],
    "filename": "src/language.py",
    "groupTitle": "Language",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/language/python/indented2"
      }
    ]
  },
  {
    "type": "get",
    "url": "/language/ruby",
    "title": "Ruby",
    "name": "GetLanguageRuby",
    "group": "Language",
    "version": "0.4.0",
    "description": "<p>Test for Ruby Comment-Syntax.</p> ",
    "filename": "src/language.rb",
    "groupTitle": "Language",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/language/ruby"
      }
    ]
  },
  {
    "type": "get",
    "url": "/language/ruby/indented1",
    "title": "Ruby indented 1",
    "name": "GetLanguageRubyIndented1",
    "group": "Language",
    "version": "0.4.0",
    "examples": [
      {
        "title": "Test for indented comment.",
        "content": "This is example line 2.\nThis is example line 3.\n    Line 4 indented (with tab at beginning).\n    Line 5 indented.\nThis is example line 6.",
        "type": "json"
      }
    ],
    "filename": "src/language.rb",
    "groupTitle": "Language",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/language/ruby/indented1"
      }
    ]
  },
  {
    "type": "get",
    "url": "/language/ruby/indented2",
    "title": "Ruby indented 2",
    "name": "GetLanguageRubyIndented2",
    "group": "Language",
    "version": "0.4.0",
    "examples": [
      {
        "title": "Test for indented comment.",
        "content": "This is example line 2.\nThis is example line 3.\n    Line 4 indented (with tab at beginning).\n    Line 5 indented.\nThis is example line 6.",
        "type": "json"
      }
    ],
    "filename": "src/language.rb",
    "groupTitle": "Language",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/language/ruby/indented2"
      }
    ]
  },
  {
    "type": "get",
    "url": "/markdown/:id",
    "title": "Markdown",
    "name": "GetMarkdown",
    "group": "Markdown",
    "version": "0.6.0",
    "description": "<p>Enable markdown for all description fields.</p> <p>This <strong>text</strong> is in a <strong>separate</strong> p.</p> <ul> <li>List 1</li> <li>List 2</li> </ul> <p>Multiline markdown text, output in one line.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "param1",
            "description": "<p>This is a markdown <strong>apiParam</strong></p> <p>Separate line.</p> "
          }
        ]
      }
    },
    "filename": "src/markdown.js",
    "groupTitle": "Markdown",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/markdown/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/param/:id",
    "title": "Errors",
    "name": "GetError",
    "group": "Param",
    "version": "0.1.0",
    "description": "<p>Returned error parameters. Syntax is the same as for @apiParam</p> ",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error1Error",
            "description": "<p>This is Error 1.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error2Error",
            "description": "<p>This is Error 2.</p> "
          }
        ]
      }
    },
    "filename": "src/api_param.js",
    "groupTitle": "Param",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/param/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/param/:id",
    "title": "Parameters",
    "name": "GetParam",
    "group": "Param",
    "version": "0.1.1",
    "description": "<p>Parameters and different Versions: 0.1.1</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "param1",
            "description": "<p>Parameter and description.</p> "
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "param2",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "param3",
            "defaultValue": "Default Value",
            "description": "<p>Parameter, default value and description.</p> "
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "param4",
            "defaultValue": "Default Value",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "param5",
            "description": "<p>Optional parameter and description.</p> "
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "param6",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "param7",
            "defaultValue": "Default Value",
            "description": "<p>Optional parameter, default value and description.</p> "
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "param8",
            "defaultValue": "Default Value",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "param9",
            "description": "<p>Type, parameter and description.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "param10",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "param11",
            "defaultValue": "Default Value",
            "description": "<p>Type, parameter and default value.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "param12",
            "defaultValue": "Default Value",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "param13",
            "description": "<p>Type, optional parameter and description.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "param14",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "param15",
            "defaultValue": "Default Value",
            "description": "<p>Type, optional parameter, default value and description.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "param26",
            "defaultValue": "Default Value",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "size": "4,8",
            "optional": false,
            "field": "param17",
            "description": "<p>Type, size, parameter and description.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "size": "1-3",
            "optional": false,
            "field": "param18",
            "description": "<p>Type, size, parameter and description.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "size": "4,8",
            "optional": false,
            "field": "param19",
            "defaultValue": "Default Value",
            "description": "<p>Type, size, parameter, default value and description.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "size": "1-3",
            "optional": false,
            "field": "param20",
            "defaultValue": "1",
            "description": "<p>Type, size, parameter, default value and description.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "\"value 1\""
            ],
            "optional": false,
            "field": "param21",
            "description": "<p>Type, parameter and allowed string value.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "\"value 1\"",
              "\"value 2\""
            ],
            "optional": false,
            "field": "param22",
            "description": "<p>Type, parameter and allowed list of string values.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "allowedValues": [
              "4711"
            ],
            "optional": false,
            "field": "param23",
            "description": "<p>Type, parameter and allowed value.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "allowedValues": [
              "4711",
              "4712"
            ],
            "optional": false,
            "field": "param24",
            "description": "<p>Type, parameter and allowed list of values.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "size": "1,10",
            "allowedValues": [
              "\"value 1\""
            ],
            "optional": false,
            "field": "param25",
            "description": "<p>Type, size, parameter and allowed string value.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "size": "1-9999",
            "allowedValues": [
              "4711"
            ],
            "optional": false,
            "field": "param27",
            "description": "<p>Type, size, parameter and allowed value.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "size": "1-9999",
            "allowedValues": [
              "4711",
              "4712"
            ],
            "optional": false,
            "field": "param28",
            "description": "<p>Type, size, parameter and allowed list of values.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p><a href=\"http://en.wikipedia.org/wiki/Data_type\">Custom</a></p> ",
            "optional": false,
            "field": "param29",
            "description": "<p>Type with markdown link.</p> "
          }
        ]
      }
    },
    "filename": "src/api_param.js",
    "groupTitle": "Param",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/param/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/param/:id",
    "title": "Parameters",
    "name": "GetParam",
    "group": "Param",
    "version": "0.1.0",
    "description": "<p>Parameters and different Versions: 0.1.0</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "param0",
            "description": "<p>This param is removed in 0.1.1.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "param1",
            "description": "<p>This is an old text.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "param2",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "param3",
            "defaultValue": "Default Value",
            "description": "<p>Parameter with type, description and default value.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "param4",
            "defaultValue": "Default Value",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "param5",
            "description": "<p>Basic Parameter with description.</p> "
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "param6",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "param7",
            "defaultValue": "Default Value",
            "description": "<p>Basic Parameter with description and default value.</p> "
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "param8",
            "defaultValue": "Default Value",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "param9",
            "description": "<p>Optional basic Parameter with description.</p> "
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "param10",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "param11",
            "defaultValue": "Default Value",
            "description": "<p>Optional basic Parameter with description and default value.</p> "
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "param12",
            "defaultValue": "Default Value",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "param13",
            "description": "<p>Optional Parameter with type and description.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "param14",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "param15",
            "defaultValue": "Default Value",
            "description": "<p>Optional Parameter with type, description and default value.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "param16",
            "defaultValue": "Default Value",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/api_param.js",
    "groupTitle": "Param",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/param/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/param/example/",
    "title": "Param Example",
    "name": "GetParamExample",
    "group": "Param",
    "version": "0.8.0",
    "description": "<p>Usage of @apiParamExample.</p> ",
    "examples": [
      {
        "title": "A common example:",
        "content": "curl -i http://localhost/param/example/",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Fullname.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "A JSON example:",
          "content": "{\n  \"name\": \"John Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api_param_example.js",
    "groupTitle": "Param",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/param/example/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/param/:id",
    "title": "Success",
    "name": "GetSuccess",
    "group": "Param",
    "version": "0.1.0",
    "description": "<p>Returned success parameters. Syntax is the same as for @apiParam</p> ",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "success1",
            "description": "<p>This is Success 1.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "success2",
            "description": "<p>This is Success 2.</p> "
          }
        ]
      }
    },
    "filename": "src/api_param.js",
    "groupTitle": "Param",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/param/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/permission/",
    "title": "Permission",
    "name": "GetPermission",
    "group": "Permission",
    "version": "0.8.0",
    "description": "<p>@apiPermission test.</p> ",
    "permission": [
      {
        "name": "permission_admin",
        "title": "Admin access.",
        "description": "<p>Some description.</p> "
      }
    ],
    "filename": "src/api_permission.js",
    "groupTitle": "Permission",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/permission/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/permission/",
    "title": "Permission",
    "name": "GetPermission",
    "group": "Permission",
    "version": "0.8.0",
    "description": "<p>@apiPermission test.</p> ",
    "permission": [
      {
        "name": "permission_admin",
        "title": "Admin access.",
        "description": "<p>Some description.</p> "
      },
      {
        "name": "permission_user",
        "title": "User access.",
        "description": ""
      }
    ],
    "filename": "src/api_permission.js",
    "groupTitle": "Permission",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/permission/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/indent/trim/multi/spaces",
    "title": "Trim multi line (spaces)",
    "group": "indent",
    "description": "<p>Text line 1 (Begin: 4xSpaces (3 removed)). Text line 2 (Begin: 3xSpaces (3 removed), End: 2xSpaces).</p> ",
    "version": "0.0.0",
    "filename": "src/indent.js",
    "groupTitle": "Indent",
    "name": "GetIndentTrimMultiSpaces",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/indent/trim/multi/spaces"
      }
    ]
  },
  {
    "type": "get",
    "url": "/indent/trim/multi/tabs",
    "title": "Trim multi line (tabs)",
    "group": "indent",
    "description": "<p>Text line 1 (Begin: 3xTab (2 removed)). Text line 2 (Begin: 2x Tab (2 removed), End: 1xTab).</p> ",
    "version": "0.0.0",
    "filename": "src/indent.js",
    "groupTitle": "Indent",
    "name": "GetIndentTrimMultiTabs",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/indent/trim/multi/tabs"
      }
    ]
  },
  {
    "type": "get",
    "url": "/indent/trim/multi/tabs/and/space",
    "title": "Trim multi line (tabs and space)",
    "group": "indent",
    "description": "<p>Text line 1 (Begin: 1xTab, 2xSpaces). Text line 2 (Begin: 3xSpaces, End: 1xTab).</p> ",
    "version": "0.0.0",
    "filename": "src/indent.js",
    "groupTitle": "Indent",
    "name": "GetIndentTrimMultiTabsAndSpace",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/indent/trim/multi/tabs/and/space"
      }
    ]
  },
  {
    "type": "get",
    "url": "/indent/trim/single",
    "title": "Trim single line",
    "group": "indent",
    "description": "<p>Text line 1 (Begin: 3xSpaces (3 removed), End: 1xSpace).</p> ",
    "version": "0.0.0",
    "filename": "src/indent.js",
    "groupTitle": "Indent",
    "name": "GetIndentTrimSingle",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/indent/trim/single"
      }
    ]
  },
  {
    "type": "get",
    "url": "/indent/word",
    "title": "Indent a word",
    "group": "indent",
    "description": "<p>text.</p> ",
    "version": "0.0.0",
    "filename": "src/indent.js",
    "groupTitle": "Indent",
    "name": "GetIndentWord",
    "sampleRequest": [
      {
        "url": "https://api.github.com/v1/indent/word"
      }
    ]
  }
] });