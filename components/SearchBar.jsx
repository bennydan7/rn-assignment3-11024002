import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import filter from "../assets/icons/slider.png";
import search from "../assets/icons/search.png";

const SearchBar = ({
  title,
  placeholder,
  filterIcon = filter,
  isFilterable = true,
  searchIcon = search,
  handleSearch,
  handleFilter,
  otherStyles,
}) => {
  return (
    <View style={[styles.container, otherStyles]}>
      <View style={styles.searchContainer}>
        <Image source={searchIcon} style={styles.searchIcon} />
        <TextInput
          style={styles.textInput}
          placeholder={placeholder || "Search"}
          onChangeText={handleSearch}
          placeholderTextColor="black"
        />
      </View>
      {isFilterable && (
        <TouchableOpacity style={styles.filterButton} onPress={handleFilter}>
          <Image source={filterIcon} style={styles.filterIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  textInput: {
    flex: 1,
    paddingVertical: 4,
    marginLeft: 4,
    fontWeight: "bold",
    color: "black",
  },
  filterButton: {
    marginLeft: 8,
    backgroundColor: "#ff0000",
    padding: 8,
    borderRadius: 12,
  },
  filterIcon: {
    width: 24,
    height: 24,
    tintColor: "white",
  },
});

export default SearchBar;
