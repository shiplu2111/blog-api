import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  try {
    const prisma = new PrismaClient();
    let reqBody = await req.json();
    let result = await prisma.category.create({ data: reqBody });

    return NextResponse.json({
      status: "Category Create Successfull",
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

    let result = await prisma.category.findMany();
    return NextResponse.json({ status: "Success", result: result });
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

    let result = await prisma.category.update({
      where: {
        id: reqBody.id,
      },
      data: {
        parentId: reqBody.parentId,
        title: reqBody.title,
        metaTitle: reqBody.metaTitle,
        slug: reqBody.slug,
        content: reqBody.content,
      },
    });

    return NextResponse.json({ status: "Success", result: result });
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

    let result = await prisma.category.delete({
      where: {
        id: reqBody.id,
      },
    });

    return NextResponse.json({ status: "Success", result: result });
  } catch (err) {
    return NextResponse.json({ status: "Fail", result: err.toString() });
  }
}
