import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  try {
    const prisma = new PrismaClient();
    let reqBody = await req.json();
    let result = await prisma.user.create({ data: reqBody });

    return NextResponse.json({
      status: "User Created Successfull",
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

    let result = await prisma.user.findMany();
    return NextResponse.json({
      status: "User Find Successfull",
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

    let result = await prisma.user.update({
      where: {
        id: reqBody.id,
      },
      data: {
        firstName: reqBody.firstName,
        middleName: reqBody.middleName,
        lastName: reqBody.lastName,
        mobile: reqBody.mobile,
        intro: reqBody.intro,
        profile: reqBody.profile,
      },
    });

    return NextResponse.json({
      status: "User Updated Successfull",
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

    let result = await prisma.user.delete({
      where: {
        id: reqBody.id,
      },
    });

    return NextResponse.json({
      status: "User Deleted Successfull",
      result: result,
    });
  } catch (err) {
    return NextResponse.json({ status: "Fail", result: err.toString() });
  }
}
