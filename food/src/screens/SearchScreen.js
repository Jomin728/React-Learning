import React,{useState,useEffect} from "react";
import { View,Text,StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultsView from "../components/ResultList";



const SearchScreen = () => {
    const [term ,setTerm] = useState('');

    const [results,searchApi] = useResults();

    const filterResultByPrice = (price) => {
        return results.filter((val)=> val.price == price)
      }

    return (
        <View>
            <SearchBar term = {term} onTermChange={(newTerm)=>{setTerm(newTerm)}} onTermSubmit={()=>{searchApi(term)}}/>
            {/* <Text>Search Screen</Text>
            <Text>We have found {results.length} results </Text> */}
            <ResultsView  results={filterResultByPrice('$')} title="Cost Effective"/>
            <ResultsView  results={filterResultByPrice('$$')} title="Bit Pricier"/>
            <ResultsView  results={filterResultByPrice('$$$')} title="Big Spender"/>

        </View>
    )
}

const styles = StyleSheet.create({

})

export default SearchScreen;