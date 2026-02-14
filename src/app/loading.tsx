import { Box, Skeleton, Stack } from "@mantine/core";

export default function Loading() {
  return (
    <Box>
      <Stack gap="md">
        <Skeleton height={20} radius="sm" w="35%" />
        <Skeleton height={140} radius="md" />
        <Skeleton height={140} radius="md" />
      </Stack>
    </Box>
  );
}
