resource "azurerm_resource_group" "static_website_rg" {
  name     = "front-end-website-rg"
  location = "UK South"
}

resource "azurerm_storage_account" "static_website_storage" {
  name                     = "frontendwebapp07232023"
  resource_group_name      = azurerm_resource_group.static_website_rg.name
  location                 = azurerm_resource_group.static_website_rg.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
  account_kind             = "StorageV2"
  static_website {
    index_document = "index.html"
  }
}
