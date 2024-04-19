import React, { useState } from "react";
import { Box, Input, Button, Text, VStack, HStack, Image, useToast } from "@chakra-ui/react";
import { FaSearch, FaPlay } from "react-icons/fa";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [songs, setSongs] = useState([]);
  const toast = useToast();

  const handleSearch = async () => {
    // Placeholder for search functionality
    // You would typically make an API request here
    toast({
      title: "API Request Made",
      description: "This is where the Spotify API request would be made.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={4} p={5}>
      <Text fontSize="2xl" fontWeight="bold">
        Spotify Song Preview
      </Text>
      <HStack>
        <Input placeholder="Search for a song" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <Button leftIcon={<FaSearch />} colorScheme="teal" onClick={handleSearch}>
          Search
        </Button>
      </HStack>
      <VStack spacing={4}>
        {songs.map((song, index) => (
          <HStack key={index} w="full" justifyContent="space-between">
            <HStack>
              <Image boxSize="50px" borderRadius="full" src={song.albumImageUrl} alt={song.name} />
              <VStack align="start">
                <Text fontWeight="bold">{song.name}</Text>
                <Text fontSize="sm">{song.artist}</Text>
              </VStack>
            </HStack>
            <Button
              leftIcon={<FaPlay />}
              onClick={() => {
                // Placeholder for play functionality
                toast({
                  title: "Play Song",
                  description: "This would play a preview of the song.",
                  status: "info",
                  duration: 3000,
                  isClosable: true,
                });
              }}
            >
              Play
            </Button>
          </HStack>
        ))}
      </VStack>
    </VStack>
  );
};

export default Index;
