import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  try {
    const prisma = new PrismaClient();
    let reqBody = await req.json();
    let result = await prisma.post.create({ data: reqBody });

    return NextResponse.json({
      status: "Post Created Successfull",
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

    let result = await prisma.post.findMany();
    return NextResponse.json({
      status: "Post Find Successfull",
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

    let result = await prisma.post.update({
      where: {
        id: reqBody.id,
      },
      data: {
        authorId: reqBody.authorId,
        parentId: reqBody.parentId,
        title: reqBody.title,
        metaTitle: reqBody.metaTitle,
        slug: reqBody.slug,
        summary: reqBody.summary,
        published: reqBody.published,
        publishedAt: reqBody.publishedAt,
        content: reqBody.content,
      },
    });

    return NextResponse.json({
      status: "Post Updated Successfull",
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

    let result = await prisma.post.delete({
      where: {
        id: reqBody.id,
      },
    });

    return NextResponse.json({
      status: "Post Deleteed Successfull",
      result: result,
    });
  } catch (err) {
    return NextResponse.json({ status: "Fail", result: err.toString() });
  }
}
