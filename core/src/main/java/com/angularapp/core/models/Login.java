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

package com.angularapp.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code Login} Sling Model used for the {@code angularapp/components/login} component.
 * 
 */
@ConsumerType
public interface Login
    extends ComponentExporter
{


    @JsonProperty("title")
    String getTitle();

    @JsonProperty("subtitle")
    String getSubtitle();

    @JsonProperty("formTitle")
    String getFormTitle();

    @JsonProperty("userPlaceholder")
    String getUserPlaceholder();

    @JsonProperty("passwordPlaceholder")
    String getPasswordPlaceholder();

    @JsonProperty("buttonName")
    String getButtonName();

}
