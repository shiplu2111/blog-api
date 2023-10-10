import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  try {
    const prisma = new PrismaClient();
    let reqBody = await req.json();
    let result = await prisma.postComment.create({ data: reqBody });

    return NextResponse.json({
      status: "Post Comment Created Successfull",
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
    let result = await prisma.postComment.findMany();
    return NextResponse.json({
      status: "Post Comment Read Successfull",
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

    let result = await prisma.postComment.update({
      where: {
        id: reqBody.id,
      },
      data: {
        postId: reqBody.postId,
        parentId: reqBody.parentId,
        title: reqBody.title,
        published: reqBody.published,
        content: reqBody.content,
      },
    });

    return NextResponse.json({
      status: "Post Comment Updated Successfull",
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

    let result = await prisma.postComment.delete({
      where: {
        id: reqBody.id,
      },
    });

    return NextResponse.json({
      status: "Post Comment Deleted Successfull",
      result: result,
    });
  } catch (err) {
    return NextResponse.json({ status: "Fail", result: err.toString() });
  }
}
