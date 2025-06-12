# RmdSmallTemplate Documentation

## Overview
RmdSmallTemplate is a modular template for displaying a user's Required Minimum Distribution (RMD) amount from the previous year. It is triggered by queries like "how much was my rmd last year" and is integrated with the intent-driven blue notification card in the RMD medium template.

## Layout
- **Answer Section:** Shows the total RMD amount for the previous year (e.g., "As of December 31, 2024: $12,345.67").
- **Conversation Buttons:** Presents follow-up RMD questions as horizontally stacked buttons below the answer.
- **Search Results:** Displays three RMD-related suggestions in a classic search results card below the conversation buttons.

## Usage
- Triggered by matching queries or aliases in the demoSearches array.
- Can also be triggered by clicking the blue notification card in the RMD medium template.

## Integration
- Uses the same row-based card grid and modular layout as other RMD templates.
- Ensures a consistent, conversational UX across all RMD flows. 