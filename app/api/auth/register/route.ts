import { NextRequest, NextResponse } from "next/server";

interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: RegisterRequest = await request.json();

    // Validate required fields
    if (!body.username || !body.email || !body.password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate password length
    if (body.password.length < 6) {
      return NextResponse.json(
        { message: "Password must be at least 6 characters long" },
        { status: 400 }
      );
    }

    // TODO: Add your actual registration logic here
    // For now, we'll simulate a successful registration

    // Example of what you might do:
    // 1. Hash the password
    // 2. Check if user already exists
    // 3. Save user to database
    // 4. Generate session/token if needed

    // Simulate some processing time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // For demo purposes, let's simulate that the username/email already exists sometimes
    if (body.username === "admin" || body.email === "admin@example.com") {
      return NextResponse.json(
        { message: "Username or email already exists" },
        { status: 409 }
      );
    }

    // Success response
    return NextResponse.json(
      {
        message: "User registered successfully",
        user: {
          id: Math.random().toString(36).substr(2, 9),
          username: body.username,
          email: body.email,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
