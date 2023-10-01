export const transformDescription = (
    description: string,
    year: number,
): string => {
    if (year == 2018) {
        return description.replace(
            'these',
            "<span id='open-modal' class='cursor-pointer text-neutral-200 underline decoration-2 underline-offset-2'>these</span>"
        )
    }

    return description
}
