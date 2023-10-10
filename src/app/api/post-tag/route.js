import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  try {
    const prisma = new PrismaClient();
    let reqBody = await req.json();
    let result = await prisma.postTag.create({ data: reqBody });

    return NextResponse.json({
      status: "Post Tag Create Successfull",
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
    let result = await prisma.postTag.findMany();
    return NextResponse.json({
      status: "Post Tag Read Successfull",
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

    let result = await prisma.postTag.update({
      where: {
        id: reqBody.id,
      },
      data: {
        postId: reqBody.postId,
        tagId: reqBody.tagId,
      },
    });

    return NextResponse.json({
      status: "Post Tag Updated Successfull",
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

    let result = await prisma.postTag.delete({
      where: {
        id: reqBody.id,
      },
    });

    return NextResponse.json({
      status: "Post Tag Deleted Successfull",
      result: result,
    });
  } catch (err) {
    return NextResponse.json({ status: "Fail", result: err.toString() });
  }
}
