import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  Image,
} from "@chakra-ui/react";

export default function CallToActionWithIllustration() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          I am{" "}
          <Text as={"u"} color={"orange.400"}>
            Bhavesh Kumar
          </Text>{" "}
        </Heading>
        <Heading>
          <Text as={""} color={"gray.400"}>
            Full Stack Web Developer
          </Text>
        </Heading>
      
          <Image
            w={"25%"}
            src="https://avatars.githubusercontent.com/u/110034571?v=4"
            borderRadius={"50%"}
          />
      

        <Button
          rounded={"full"}
          px={6}
          colorScheme={"orange"}
          bg={"orange.400"}
          _hover={{ bg: "orange.500" }}
        >
          Resume
        </Button>
      </Stack>
      <Stack spacing={6} direction={"row"}></Stack>
    </Container>
  );
}
