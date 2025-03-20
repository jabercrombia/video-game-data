from fastapi import APIRouter, HTTPException
from db import get_db_connection

router = APIRouter()

# return all films
@router.get("/films/")
def get_films():
    conn = get_db_connection()
    if not conn:
        raise HTTPException(status_code=500, detail="Database connection failed")

    cursor = conn.cursor()
    cursor.execute("select * from grammys")
    rows = cursor.fetchall()
    cursor.close()
    conn.close()

    # Convert to list of dicts
    films = [{"year": row[0]} for row in rows]

    return {"films": films}
