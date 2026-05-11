# Fullstack Authentication System (Node.js - React - MongoDB)

Dự án này là một hệ thống xác thực người dùng (Authentication) hoàn chỉnh được xây dựng bằng bộ ba công nghệ Express.js, ReactJS và MongoDB. Hệ thống bao gồm chức năng đăng ký, đăng nhập (sử dụng JWT) và quản lý người dùng với giao diện hiện đại sử dụng Ant Design.

## 🚀 Tính năng chính

- **Xác thực người dùng**: Đăng ký và Đăng nhập bảo mật với mật khẩu được mã hóa (bcrypt).
- **JWT Authentication**: Sử dụng JSON Web Token để quản lý phiên đăng nhập và bảo vệ các API.
- **Phân quyền cơ bản**: Middleware kiểm tra quyền truy cập dựa trên token.
- **Giao diện hiện đại (UI/UX)**: 
  - Thiết kế theo phong cách Glassmorphism (kính mờ).
  - Sử dụng thư viện **Ant Design** (antd) cho các component.
  - Header thông minh (Sticky Header) với đầy đủ chức năng Search, Notifications.
- **Quản lý người dùng**: Trang hiển thị danh sách người dùng dưới dạng bảng với Tag phân loại vai trò (Admin/User).

## 🛠 Công nghệ sử dụng

### Backend
- **Node.js & Express.js**: Framework cho server-side.
- **MongoDB & Mongoose**: Cơ sở dữ liệu NoSQL và thư viện ODM.
- **JWT (Jsonwebtoken)**: Xử lý token bảo mật.
- **Bcrypt**: Mã hóa mật khẩu người dùng.
- **Dotenv**: Quản lý biến môi trường.

### Frontend
- **React (Vite)**: Thư viện giao diện người dùng nhanh và nhẹ.
- **Ant Design**: Thư viện UI components mạnh mẽ.
- **React Router Dom**: Quản lý điều hướng trang.
- **Axios**: Xử lý gọi API với Interceptors để tự động đính kèm token.

## 📂 Cấu trúc dự án

```text
├── backend/
│   ├── src/
│   │   ├── config/       # Cấu hình DB, View Engine
│   │   ├── controllers/  # Xử lý logic nghiệp vụ
│   │   ├── middleware/   # Auth, Delay middleware
│   │   ├── models/       # Định nghĩa Schema MongoDB
│   │   ├── routes/       # Khai báo các API routes
│   │   └── services/     # Tầng giao tiếp với DB
│   └── .env              # Biến môi trường backend
└── frontend/
    ├── src/
    │   ├── components/   # Layout, Pages, Context, Styles
    │   ├── util/         # Axios customize, API calls
    │   └── App.jsx       # Component chính
    └── .env              # Biến môi trường frontend
```

## ⚙️ Hướng dẫn cài đặt và chạy

### 1. Cấu hình Cơ sở dữ liệu
Đảm bảo bạn đã cài đặt MongoDB và đang chạy trên `localhost:27017`.

### 2. Chạy Backend
```bash
cd backend
npm install
npm run dev
```
Server sẽ chạy tại: `http://localhost:5000`

### 3. Chạy Frontend
```bash
cd frontend
npm install
npm run dev
```
Ứng dụng sẽ chạy tại: `http://localhost:5173`

## 📝 Thông tin tác giả
Dự án được phát triển dựa trên khóa học của **ThS. Nguyễn Hữu Trung (Hỏi Dân IT)**.