/*
 * ***********************************************************************
 * Angular App CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 Angular App.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of Angular App and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to Angular App
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Angular App.
 * ***********************************************************************
 */

package com.angularapp.core.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.angularapp.core.models.Login;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    Login.class,
    ComponentExporter.class
}, resourceType = "angularapp/components/login")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class LoginImpl
    implements Login
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String title;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String subtitle;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String formTitle;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String userPlaceholder;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String passwordPlaceholder;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String buttonName;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("title")
    public String getTitle() {
        return title;
    }

    @Override
    @JsonProperty("subtitle")
    public String getSubtitle() {
        return subtitle;
    }

    @Override
    @JsonProperty("formTitle")
    public String getFormTitle() {
        return formTitle;
    }

    @Override
    @JsonProperty("userPlaceholder")
    public String getUserPlaceholder() {
        return userPlaceholder;
    }

    @Override
    @JsonProperty("passwordPlaceholder")
    public String getPasswordPlaceholder() {
        return passwordPlaceholder;
    }

    @Override
    @JsonProperty("buttonName")
    public String getButtonName() {
        return buttonName;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
