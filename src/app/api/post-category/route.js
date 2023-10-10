import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  try {
    const prisma = new PrismaClient();
    let reqBody = await req.json();
    let result = await prisma.postCategory.create({ data: reqBody });

    return NextResponse.json({
      status: "Post Category Created Successfull",
      result: result,
    });
  } catch (err) {
    return NextResponse.json({ status: "Fail", result: err.toString() });
  }
}

export async function GET(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  try {
    const prisma = new PrismaClient();
    let result = await prisma.postCategory.findMany();
    return NextResponse.json({
      status: "Post Category Read Successfull",
      result: result,
    });
  } catch (err) {
    return NextResponse.json({ status: "Fail", result: err.toString() });
  }
}

export async function PUT(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  try {
    const prisma = new PrismaClient();
    let reqBody = await req.json();

    let result = await prisma.postCategory.update({
      where: {
        id: reqBody.id,
      },
      data: {
        postId: reqBody.postId,
        categoryId: reqBody.categoryId,
      },
    });

    return NextResponse.json({
      status: "Post Category Updated Successfull",
      result: result,
    });
  } catch (err) {
    return NextResponse.json({ status: "Fail", result: err.toString() });
  }
}

export async function DELETE(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  try {
    const prisma = new PrismaClient();
    let reqBody = await req.json();

    let result = await prisma.postCategory.delete({
      where: {
        id: reqBody.id,
      },
    });

    return NextResponse.json({
      status: "Post Category Deleted Successfull",
      result: result,
    });
  } catch (err) {
    return NextResponse.json({ status: "Fail", result: err.toString() });
  }
}
