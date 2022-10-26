
export const convertToPath = (name: string) => {
    return name.toLowerCase().replace(/\s/g, "-")
}

export const limitDecimals = (n: number): number => parseFloat(n.toFixed(2));