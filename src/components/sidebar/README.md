# Sidebar Component

## Structure & Features

- **Actions Section**: Contains 'New Search' (Plus icon) and 'New Research Project' (FilePlus icon) as top-level items.
- **History Section**: Grouped by Today, Yesterday, etc. (currently static, designed for future dynamic grouping).
- **Button Alignment**: All sidebar buttons are centered when the sidebar is collapsed for a clean look.
- **Footer**: Settings button appears above the profile dropdown. The profile menu uses shadcn/ui DropdownMenu and Avatar components, matching modern UI standards.
- **Profile Menu**: Shows avatar, name, and email when expanded; only avatar when collapsed. Menu includes Upgrade, Account, Billing, Notifications, and Log out options.

## Usage

Import and use `<AppSidebar />` in your page layout. The sidebar is fully responsive and supports both expanded and collapsed states.

## Customization

- To add or remove actions, edit the Actions section in `AppSidebar.tsx`.
- To update history grouping, modify the History section logic.
- To change profile menu options, update the DropdownMenu in the footer.

---

_Last updated: [auto-generated]_ 