# -*- coding: utf-8 -*-
{
    'name': "Search More with No Create Button",

    'summary': """
        Remove Create button in Search More.""",

    'description': """
        Remove Create button in Search View after clicking Search More in Many2One field.
    """,

    'author': "Linksoft Mitra Informatika",
    'website': "https://linksoft.id",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/master/odoo/addons/base/module/module_data.xml
    # for the full list
    'category': 'Extra Tools',
    'version': '1.0.0',

    # any module necessary for this one to work correctly
    'depends': [
        'base',
        'web'
    ],

    # always loaded
    'data': [
        # group

        # data

        # action

        # view
        'views/views.xml',

        # menu

        # security
        # 'security/ir.model.access.csv',
    ],
    # only loaded in demonstration mode
    'demo': [
        # 'demo/demo.xml',
    ],
}
