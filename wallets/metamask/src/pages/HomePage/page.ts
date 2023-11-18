import type { Page } from '@playwright/test'
import { importWalletFromPrivateKey, lock, settings, switchAccount } from './actions'
import Selectors from './selectors'
import type { SettingsSidebarMenus } from './selectors/settings'

export class HomePage {
  static readonly selectors = Selectors
  readonly selectors = Selectors

  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async goBackToHomePage() {
    await this.page.locator(Selectors.logo).click()
  }

  async lock() {
    await lock(this.page)
  }

  async importWalletFromPrivateKey(privateKey: string) {
    await importWalletFromPrivateKey(this.page, privateKey)
  }

  async switchAccount(accountName: string) {
    await switchAccount(this.page, accountName)
  }

  async openSettings() {
    await settings.openSettings(this.page)
  }

  async openSidebarMenu(menu: SettingsSidebarMenus) {
    await settings.openSidebarMenu(this.page, menu)
  }

  async toggleShowTestNetworks() {
    await settings.advanced.toggleShowTestNetworks(this.page)
  }
}