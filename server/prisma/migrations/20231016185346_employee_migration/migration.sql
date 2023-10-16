-- CreateTable
CREATE TABLE "Employee" (
    "employee_id" SERIAL NOT NULL,
    "employee_name" TEXT NOT NULL DEFAULT '',
    "employee_email" TEXT NOT NULL,
    "employee_designation" TEXT NOT NULL DEFAULT '',
    "employee_role" TEXT NOT NULL DEFAULT '',
    "employee_department" TEXT NOT NULL DEFAULT '',
    "employee_password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("employee_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_employee_email_key" ON "Employee"("employee_email");
