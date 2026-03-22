# ZenMetal - Premium Metal Price Tracker

ZenMetal is a beautiful, high-performance React Native application designed for investors and market enthusiasts. It provides real-time tracking of precious and industrial metals with a premium User Interface, smooth animations, and platform-aware haptic feedback.

Whether you're monitoring **Gold**, **Silver**, **Platinum**, or **Palladium**, ZenMetal delivers accurate market data and essential insights in an elegant, responsive package.

---

## 🚀 Features

### 1. Home Screen: Market Overview
- **Categorical 2x2 Grid**: Metals are organized into logical rows:
    - **Row 1**: Gold and Silver (Precious Metals).
    - **Row 2**: Platinum and Palladium (Industrial/Precious Metals).
- **Portfolio Estimator**: A dynamic header showing the value of your holdings based on Current XAU prices.
- **Trend Indicators**: Real-time percentage change with color-coded trend arrows.

### 2. Details Screen: Deep Analysis
- **Comprehensive Metrics**: View Open Price, Prev Close, Day High, and Day Low in an organized statistic grid.
- **Premium Visualization**: High-resolution metallic background images tailored to each metal group.
- **Interactive Actions**: Set and update price alerts with specialized, success-themed feedback.

### 3. Live Data & Performance
- **Live API Integration**: Fetches real-time prices using `goldapi.io` with a robust mock fallback for development.
- **Independent Loaders**: Each metal card has its own shimmering skeleton loader, preventing UI blocking while waiting for data.
- **Haptic Precision**: Tactile feedback for key interactions, including "Success" notifications for alerts and "Impact" haptics for navigation.

### 4. Responsive & Modern Design
- **Adaptive Layouts**: Seamlessly transitions between mobile, tablet, and wide-screen laptop browsers.
- **Width Constrained UX**: Content is capped and centered on large screens to maintain an elegant dashboard look.

---

## 🛠️ Tech Stack

- **Framework**: [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/) (Managed Workflow)
- **Navigation**: [Expo Router](https://docs.expo.dev/router/introduction/) (Typesafe file-based routing)
- **Animations**: [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) for 60FPS fluid transitions.
- **Icons**: [MaterialCommunityIcons](https://icons.expo.fyi/Index) and [Ionicons](https://icons.expo.fyi/Index).
- **Haptics**: [Expo Haptics](https://docs.expo.dev/versions/latest/sdk/haptics/) for premium tactile feedback.
- **Theme System**: Custom HSL-based design system with full Dark Mode and Light Mode support.
- **Language**: [TypeScript](https://www.typescriptlang.org/) for robust codebase integrity.

---

## 📦 Setup Instructions

Follow these steps to get the project running locally on your machine:

### 1. Clone the Repository
```bash
git clone <repo-url>
cd financial-app/MetalPricesApp
```

### 2. Install Dependencies
```bash
npm install
# OR
yarn install
```

### 3. Configure API Key (Optional)
Open `src/services/api/metalService.ts` and provide your API Key from [goldapi.io](https://www.goldapi.io/):
```typescript
const API_KEY = 'your_api_key_here';
```

### 4. Run the Application
- **For Android**: Ensure you have an emulator running or device connected.
  ```bash
  npx expo run:android
  ```
- **For iOS**: (macOS Only)
  ```bash
  npx expo run:ios
  ```
- **Development Server (Expo Go / Web)**:
  ```bash
  npx expo start -c
  ```

---

## 📖 Usage Guide

- **Browse Markets**: Scroll through the Home Screen to see current prices and trends.
- **Detailed Stats**: Tap any metal card to see its full performance history and metrics for the day.
- **Set Alerts**: In the Details Screen, tap "Set Price Alert" to configure notifications for your target buy/sell price.
- **Switch Themes**: The app automatically responds to your system's Dark/Light mode settings for optimal visual comfort.

---

## 📂 Folder Structure

```text
/app               # Expo Router file-based screens (Tabs & Details)
/assets            # High-resolution metallic textures and icons
/src
  /components     # Reusable UI (MetalCard, CustomButton, AppHeader, etc.)
  /hooks          # Custom hooks (useMetalPrice, useMetalAlert)
  /services       # API integration and data fetching logic
  /styles         # Design tokens, GlobalStyles, and component-specific themes
  /navigation     # TypeScript navigation definitions
```

---

## 🤝 Contribution & License

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

**License**: Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 👨‍💻 Author

**Shaik Rizafar**  
[GitHub Profile](https://github.com/Rizafar76)   

---

*Built with ❤️ for the Precious Metals Community.*
