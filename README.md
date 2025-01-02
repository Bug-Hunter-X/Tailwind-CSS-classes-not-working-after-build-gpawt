# Tailwind CSS Classes Not Working After Build

This repository demonstrates a common issue encountered when using Tailwind CSS: classes defined in your configuration file not applying after the build process.

## Problem Description

The Tailwind CSS classes are properly configured in `tailwind.config.js`, but after building the project (e.g., using Vite, Webpack, etc.), the classes do not render the expected styles in the browser. The HTML elements retain their default styles.

## Solution

The solution involves ensuring that the build process correctly includes and processes your Tailwind CSS directives. This usually involves using a build plugin or configuring your build tool to correctly handle the Tailwind CSS postcss configuration.