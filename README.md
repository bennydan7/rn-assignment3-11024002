# React Native Task Manager

## Description

This is a simple task manager app built with React Native. The app provides users with a clean interface to manage and view their daily tasks, organized into different categories and ongoing tasks.

## Components

### App

The main component that renders the entire app structure including the header, search bar, categories, and ongoing tasks.

### SearchBar

- **Usage**: Allows users to search for specific tasks. The search bar also includes an optional filter feature.
- **Props**:
  - `placeholder`: Placeholder text for the search input.
  - `searchIcon`: Icon for the search button.
  - `isFilterable`: Boolean to enable or disable the filter button.
  - `filterIcon`: Icon for the filter button.
  - `otherStyles`: Additional styles for the search bar.

### Category

- **Usage**: Displays individual task categories including the category title, number of tasks, and an image.
- **Props**:
  - `title`: Title of the category.
  - `taskNumber`: Number of tasks in the category.
  - `categoryImage`: Image representing the category.

### OngoingTask

- **Usage**: Displays individual ongoing tasks with task names.
- **Props**:
  - `taskName`: Name of the task.

## Screenshots

### Home Screen

![Home Screen](./assets/screenshot1.jpg)

### Categories and Ongoing Task

![Categories and Ongoing Task](./assets/screenshot2.jpg)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/bennydan7/rn-assignment3-11024002.git
   ```

## Student ID

    11024002

## Author

Bernard Asiedu Owusu-Dankwah
