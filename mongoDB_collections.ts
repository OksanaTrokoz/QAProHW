use hw23

db.createCollection("users", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["email", "password", "createdAt", "updatedAt", "role"],
        properties: {
          email: { bsonType: "string" },
          password: { bsonType: "string" },
          createdAt: { bsonType: "date" },
          updatedAt: { bsonType: "date" },
          role: { bsonType: "string" }
        }
      }
    }
  });
  
  db.createCollection("user_profiles", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["userId", "name", "lastName", "createdAt", "updatedAt"],
        properties: {
          userId: { bsonType: "int" },
          photoFilename: { bsonType: "string" },
          name: { bsonType: "string" },
          lastName: { bsonType: "string" },
          dateBirth: { bsonType: "date" },
          country: { bsonType: "string" },
          createdAt: { bsonType: "date" },
          updatedAt: { bsonType: "date" }
        }
      }
    }
  });
  
  db.createCollection("car_brands", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["title", "createdAt", "updatedAt"],
        properties: {
          title: { bsonType: "string" },
          logoFilename: { bsonType: "string" },
          createdAt: { bsonType: "date" },
          updatedAt: { bsonType: "date" }
        }
      }
    }
  });
  
  db.createCollection("car_models", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["carBrandId", "title", "createdAt", "updatedAt"],
        properties: {
          carBrandId: { bsonType: "int" },
          title: { bsonType: "string" },
          createdAt: { bsonType: "date" },
          updatedAt: { bsonType: "date" }
        }
      }
    }
  });
  
  db.createCollection("cars", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["carBrandId", "carModelId", "userId", "mileage", "initialMileage", "updatedMileageAt", "createdAt", "updatedAt", "carCreatedAt"],
        properties: {
          carBrandId: { bsonType: "int" },
          carModelId: { bsonType: "int" },
          userId: { bsonType: "int" },
          mileage: { bsonType: "int" },
          initialMileage: { bsonType: "int" },
          updatedMileageAt: { bsonType: "date" },
          createdAt: { bsonType: "date" },
          updatedAt: { bsonType: "date" },
            carCreatedAt: { bsonType: "date" }
        }
      }
    }
  });

db.users.createIndex({ email: 1 }, { unique: true });
db.user_profiles.createIndex({ userId: 1 }, { unique: true });
db.cars.createIndex({ userId: 1 });
db.cars.createIndex({ carBrandId: 1 });
db.cars.createIndex({ carModelId: 1 });
db.car_models.createIndex({ carBrandId: 1 });

db.users.insertMany([
    { email: "user1@example.com", password: "password1", createdAt: new Date(), updatedAt: new Date(), role: "user" },
    { email: "user2@example.com", password: "password2", createdAt: new Date(), updatedAt: new Date(), role: "admin" },
    { email: "user3@example.com", password: "password3", createdAt: new Date(), updatedAt: new Date(), role: "user" },
    { email: "user4@example.com", password: "password4", createdAt: new Date(), updatedAt: new Date(), role: "user" },
    { email: "user5@example.com", password: "password5", createdAt: new Date(), updatedAt: new Date(), role: "user" }
  ]);
  
db.user_profiles.insertMany([
      { userId: 1, photoFilename: "photo1.jpg", name: "John", lastName: "Doe", dateBirth: new Date("1990-01-01"), country: "USA", createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, photoFilename: "photo2.png", name: "Jane", lastName: "Smith", dateBirth: new Date("1985-05-10"), country: "Canada", createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, photoFilename: "photo3.gif", name: "Peter", lastName: "Jones", dateBirth: new Date("1992-11-20"), country: "UK", createdAt: new Date(), updatedAt: new Date() },
      { userId: 4, photoFilename: "photo4.jpeg", name: "Alice", lastName: "Johnson", dateBirth: new Date("1988-03-15"), country: "Australia", createdAt: new Date(), updatedAt: new Date() },
      { userId: 5, photoFilename: "photo5.svg", name: "Bob", lastName: "Williams", dateBirth: new Date("1995-07-25"), country: "Germany", createdAt: new Date(), updatedAt: new Date() }
  ]);
  
db.car_brands.insertMany([
      { title: "Toyota", logoFilename: "toyota.png", createdAt: new Date(), updatedAt: new Date() },
      { title: "Honda", logoFilename: "honda.png", createdAt: new Date(), updatedAt: new Date() },
      { title: "Ford", logoFilename: "ford.png", createdAt: new Date(), updatedAt: new Date() },
      { title: "BMW", logoFilename: "bmw.png", createdAt: new Date(), updatedAt: new Date() },
      { title: "Mercedes", logoFilename: "mercedes.png", createdAt: new Date(), updatedAt: new Date() }
  ]);

db.car_models.insertMany([
      { carBrandId: 1, title: "Camry", createdAt: new Date(), updatedAt: new Date() },
      { carBrandId: 1, title: "Corolla", createdAt: new Date(), updatedAt: new Date() },
      { carBrandId: 2, title: "Civic", createdAt: new Date(), updatedAt: new Date() },
      { carBrandId: 3, title: "Mustang", createdAt: new Date(), updatedAt: new Date() },
      { carBrandId: 4, title: "X5", createdAt: new Date(), updatedAt: new Date() }
  ]);

db.cars.insertMany([
      { carBrandId: 1, carModelId: 1, userId: 1, mileage: 10000, initialMileage: 0, updatedMileageAt: new Date(), createdAt: new Date(), updatedAt: new Date(), carCreatedAt: new Date() },
      { carBrandId: 2, carModelId: 3, userId: 2, mileage: 5000, initialMileage: 0, updatedMileageAt: new Date(), createdAt: new Date(), updatedAt: new Date(), carCreatedAt: new Date() },
      { carBrandId: 3, carModelId: 4, userId: 3, mileage: 15000, initialMileage: 0, updatedMileageAt: new Date(), createdAt: new Date(), updatedAt: new Date(), carCreatedAt: new Date() },
      { carBrandId: 4, carModelId: 5, userId: 4, mileage: 20000, initialMileage: 0, updatedMileageAt: new Date(), createdAt: new Date(), updatedAt: new Date(), carCreatedAt: new Date() },
      { carBrandId: 1, carModelId: 2, userId: 5, mileage: 7500, initialMileage: 0, updatedMileageAt: new Date(), createdAt: new Date(), updatedAt: new Date(), carCreatedAt: new Date() }
  ]);
