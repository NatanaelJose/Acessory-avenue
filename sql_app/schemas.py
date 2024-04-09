from pydantic import BaseModel
from typing import Optional

class UserBase(BaseModel):
    name: str
    email: str
    hashed_password: str
    verified: bool
    admin: bool


class UserCreate(UserBase):
    hashed_password: str


class User(UserBase):
    id: int
    verified: bool

    class Config:
        orm_mode = True

class UserUpdate(BaseModel):
    name: Optional[str] = None
    email: Optional[str] = None
    hashed_password: Optional[str] = None