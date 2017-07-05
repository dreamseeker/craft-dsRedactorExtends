<?php
/**
 * dsRedactorExtends plugin for Craft CMS
 *
 * This is intended to add Redactor Plugins.
 *
 * @author    dreamseeker
 * @copyright Copyright (c) 2017 dreamseeker
 * @link      https://github.com/dreamseeker
 * @package   DsRedactorExtends
 * @since     1.0.0
 */

namespace Craft;

class DsRedactorExtendsPlugin extends BasePlugin
{
    /**
     * @return mixed
     */
    public function init()
    {
        parent::init();

      if (craft()->request->isCpRequest()) {
        craft()->templates->includeJsResource('dsredactorextends/plugins/inlinestyle.js');
        craft()->templates->includeJsResource('dsredactorextends/plugins/fontcolor.js');
        craft()->templates->includeJsResource('dsredactorextends/plugins/fontsize.js');
        craft()->templates->includeJsResource('dsredactorextends/plugins/underline.js');
        craft()->templates->includeJsResource('dsredactorextends/plugins/clips.js');
        // add custom CSS
        $this->_renderCss();
      }
    }

    /**
     * @return mixed
     */
    public function getName()
    {
         return Craft::t('dsRedactorExtends');
    }

    /**
     * @return mixed
     */
    public function getDescription()
    {
        return Craft::t('This is intended to add Redactor Plugins.');
    }

    /**
     * @return string
     */
    public function getDocumentationUrl()
    {
        return 'https://github.com/dreamseeker/craft-dsRedactorExtends/blob/master/README.md';
    }

    /**
     * @return string
     */
    public function getReleaseFeedUrl()
    {
        return 'https://raw.githubusercontent.com/dreamseeker/craft-dsRedactorExtends/master/releases.json';
    }

    /**
     * @return string
     */
    public function getVersion()
    {
        return '1.0.2';
    }

    /**
     * @return string
     */
    public function getSchemaVersion()
    {
        return '1.0.1';
    }

    /**
     * @return string
     */
    public function getDeveloper()
    {
        return 'dreamseeker';
    }

    /**
     * @return string
     */
    public function getDeveloperUrl()
    {
        return 'https://github.com/dreamseeker';
    }

    /**
     * @return bool
     */
    public function hasCpSection()
    {
        return false;
    }

    /**
     */
    public function onBeforeInstall()
    {
    }

    /**
     */
    public function onAfterInstall()
    {
    }

    /**
     */
    public function onBeforeUninstall()
    {
    }

    /**
     */
    public function onAfterUninstall()
    {
    }

    /**
     * plugin settings
     */
    protected function defineSettings()
    {
        return array(
            'cssFilePath' => array(AttributeType::String),
        );
    }

    /**
     * Setting Page HTML
     */
    public function getSettingsHtml()
    {
        return craft()->templates->render('dsredactorextends/_settings', array(
            'settings' => $this->getSettings(),
        ));
    }

    /**
     * render Custom CSS
     */
    private function _renderCss()
    {
        $settings = $this->getSettings();
        if (trim($settings->cssFilePath)) {
            $filepath = craft()->config->parseEnvironmentString($settings->cssFilePath);
            if ($hash = @sha1_file($filepath)) {
                craft()->templates->includeCssFile($filepath.'?e='.$hash);
            } else {
                craft()->templates->includeCssFile($filepath);
            }
        }
    }
}
