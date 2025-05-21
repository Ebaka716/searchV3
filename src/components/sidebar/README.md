# Sidebar Component

## Structure & Features

- **Actions Section**: Contains 'New Search' (Plus icon) and 'New Research Project' (FilePlus icon) as top-level items.
- **History Section**: Grouped by Today, Yesterday, etc. (currently static, designed for future dynamic grouping).
- **Button Alignment**: All sidebar buttons are centered when the sidebar is collapsed for a clean look.
- **Footer**: This should use the SideBarFooter attribute supplied with the component.
- **Profile Menu**: Shows avatar, name, and email when expanded; only avatar when collapsed. Menu includes Upgrade, Account, Billing, Notifications, and Log out options.

## Usage

Import and use `<AppSidebar />` in your page layout. The sidebar is fully responsive and supports both expanded and collapsed states.

### Dynamic Alignment Below Header

`AppSidebar` now accepts a `headerHeight` prop (in pixels), which should be set to the height of your main header. When used with `MainLayout`, the header height is measured automatically and passed to the sidebar, ensuring the sidebar always starts immediately below the header, regardless of header size. This is handled by:

- `MainLayout` measures the header height using a ref and passes it as the `headerHeight` prop to `AppSidebar`.
- `AppSidebar` uses this prop to set its `top` and `height` styles dynamically.

This ensures perfect alignment and a robust layout, even if the header height changes (responsive, dynamic content, etc).

## Customization

- To add or remove actions, edit the Actions section in `AppSidebar.tsx`.
- To update history grouping, modify the History section logic.
- To change profile menu options, update the DropdownMenu in the footer.

---

_Last updated: [auto-generated, dynamic sidebar alignment documented]_ 