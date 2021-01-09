// https://edabit.com/challenge/SAdqaWKRpjLfZnGKA

const century = (year) => String(year).slice(-2) === "00" ? `${String(year).slice(0, 2)}th century` : (Number(String(year).slice(0, 2)) + 1) === 21 ? `${Number(String(year).slice(0, 2)) + 1}st century` : `${Number(String(year).slice(0, 2)) + 1}th century`;