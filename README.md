# dsRedactorExtends plugin for Craft CMS

This is intended to add Redactor Plugins.

## Installation

To install dsRedactorExtends, follow these steps:

1. Download & unzip the file and place the `dsredactorextends` directory into your `craft/plugins` directory
2.  -OR- do a `git clone https://github.com/dreamseeker/dsredactorextends.git` directly into your `craft/plugins` folder.  You can then update it with `git pull`
3.  -OR- install with Composer via `composer require dreamseeker/dsredactorextends`
4. Install plugin in the Craft Control Panel under Settings > Plugins
5. The plugin folder should be named `dsredactorextends` for Craft to see it.  GitHub recently started appending `-master` (the branch name) to the name of the folder for zip file downloads.

dsRedactorExtends works on Craft 2.6.x. and Redactor II.

## dsRedactorExtends Overview

dsRedactorExtends adds following Redactor Plugins to RichText Editor.

* Inline Style  
  https://imperavi.com/redactor/plugins/inlinestyle/
* Font Color  
  https://imperavi.com/redactor/plugins/font-color/

## Using dsRedactorExtends

Please create .json files into `craft/config/redactor` for Redactor config.

**JSON Sample**

```json
{
  plugins: ['inlinestyle', 'fontcolor'],
  inlinestyleTags: {
    "style1": {
      title: "InlineStyle01",
      args: ['mark', 'class', 'styleA', 'toggle']
    },
    "style2": {
      title: "InlineStyle02",
      args: ['code', 'class', 'styleB', 'toggle']
    },
  },
  fontcolorLists: [
    '#ffffff', '#000000', '#eeece1', '#1f497d', '#4f81bd', '#c0504d', '#9bbb59', '#8064a2', '#4bacc6', '#f79646', '#ffff00',
    '#f2f2f2', '#7f7f7f', '#ddd9c3', '#c6d9f0', '#dbe5f1', '#f2dcdb', '#ebf1dd', '#e5e0ec', '#dbeef3', '#fdeada', '#fff2ca',
    '#d8d8d8', '#595959', '#c4bd97', '#8db3e2', '#b8cce4', '#e5b9b7', '#d7e3bc', '#ccc1d9', '#b7dde8', '#fbd5b5', '#ffe694'
  ],
  bgcolorLists: [
    '#ffffff', '#000000', '#eeece1', '#1f497d', '#4f81bd', '#c0504d', '#9bbb59', '#8064a2', '#4bacc6', '#f79646', '#ffff00'
  ]
}
```

## dsRedactorExtends Roadmap

Some things to do, and ideas for potential features:

### 1.0.0 -- 2017.06.22

* Release it

Brought to you by [dreamseeker](https://github.com/dreamseeker)
