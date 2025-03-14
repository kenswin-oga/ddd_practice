```mermaid
classDiagram
    %% ユーザー (Customer) 集約
    class Customer {
        <<aggregate root>>
        +String customerId
        +String email
        +String passwordHash
        +String firstName
        +String lastName
        +Address address
        +Boolean isActive
        +DateTime createdAt
        +login()
        +register()
        +resetPassword()
        +updateProfile()
    }

    Customer "1" -- "1" Address : has
    
    class Address {
        +String street
        +String city
        +String state
        +String postalCode
        +String country
    }
    
    %% 管理アカウント (Admin) 集約
    class Admin {
        <<aggregate root>>
        +String adminId
        +String email
        +String passwordHash
        +String role
        +Boolean isActive
        +DateTime createdAt
        +login()
        +createAdminAccount()
    }
    
    %% 商品 (Product) 集約
    class Product {
        <<aggregate root>>
        +String productId
        +String name
        +String description
        +Double price
        +Boolean isActive
        +DateTime createdAt
        +viewDetails()
        +updateDetails()
        +stopSelling()
    }
    
    Product "1" -- "*" ProductImage : has
    Product "*" -- "*" Category : belongs to
    
    class ProductImage {
        +String imageId
        +String url
        +Boolean isPrimary
        +Integer displayOrder
    }
    
    class Category {
        +String categoryId
        +String name
        +String description
    }
    
    %% 在庫 (Stock) 集約
    class Stock {
        <<aggregate root>>
        +String StockId
        +String productId
        +Integer stockQuantity
        +DateTime lastUpdated
        +checkAvailability()
        +updateStock()
    }
    
    %% カート (Cart) 集約
    class Cart {
        <<aggregate root>>
        +String cartId
        +String customerId
        +DateTime createdAt
        +Double totalAmount
        +addItem()
        +removeItem()
        +updateQuantity()
        +checkout()
    }
    
    Cart "1" -- "*" CartItem : contains
    
    class CartItem {
        +String cartItemId
        +String productId
        +Integer quantity
        +Double subtotal
        +calculateSubtotal()
    }
    
    %% 注文 (Order) 集約 - 簡略化
    class Order {
        <<aggregate root>>
        +String orderId
        +String customerId
        +Double totalAmount
        +String status
        +DateTime orderDate
        +process()
        +cancel()
    }
    
    Order "1" -- "*" OrderItem : contains
    Order "1" -- "1" Payment : has
    
    class OrderItem {
        +String orderItemId
        +String productId
        +String productName
        +Integer quantity
        +Double price
        +Double subtotal
    }
    
    class Payment {
        +String paymentId
        +Double amount
        +String status
        +DateTime paymentDate
        +String paymentType
        +processPayment()
    }
    
    %% 集約間の関連（IDによる参照を破線で表現）
    Customer <.. Cart : references customerId
    Customer <.. Order : references customerId
    Product <.. CartItem : references productId
    Product <.. OrderItem : references productId
    Product <.. Stock : references productId
    
    %% 管理関連
    Admin ..> Product : manages
    Admin ..> Stock : manages
    ```