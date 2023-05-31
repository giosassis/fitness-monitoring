-- CreateTable
CREATE TABLE "Personal" (
    "personal_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "cref" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "addressId" INTEGER,

    CONSTRAINT "Personal_pkey" PRIMARY KEY ("personal_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Personal_email_key" ON "Personal"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Personal_addressId_key" ON "Personal"("addressId");

-- AddForeignKey
ALTER TABLE "Personal" ADD CONSTRAINT "Personal_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("address_id") ON DELETE SET NULL ON UPDATE CASCADE;
