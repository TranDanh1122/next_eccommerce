-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "img_desktop" TEXT NOT NULL DEFAULT '',
    "img_tablet" TEXT NOT NULL DEFAULT '',
    "img_mobile" TEXT NOT NULL DEFAULT '',
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Galleries" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "type_id" TEXT NOT NULL,
    "img" TEXT NOT NULL,

    CONSTRAINT "Galleries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Includes" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "item" TEXT NOT NULL,
    "productId" TEXT,

    CONSTRAINT "Includes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "img_desktop" TEXT NOT NULL DEFAULT '',
    "img_tablet" TEXT NOT NULL DEFAULT '',
    "img_mobile" TEXT NOT NULL DEFAULT '',
    "isNew" BOOLEAN NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "features" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Includes" ADD CONSTRAINT "Includes_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
