import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { statusUpdate } from '../redux/Reducers';

const TableRow = React.memo(({ user }) => {
    const dispatch = useDispatch();
    console.log(`render row ${user?.id}`);
    return (
      <View style={styles.table}>
        <Text>{user?.name}</Text>
        <Text>{user?.status}</Text>
        <TouchableOpacity onPress={() => dispatch(statusUpdate(user?.id))}>
          <Text>{user?.status == 'Active' ? 'Deactivate' : 'Activate'}</Text>
        </TouchableOpacity>
      </View>
    );
  });

const Table = () => {
    const table = useSelector((state) => state.status.value);  
  return (
    <View style={{flex:1, justifyContent:'center'}}>
        {table?.map((user, i)=>{
            return(
                <TableRow key={i} user={user}/>
            )
        })}
    </View>
  );
};
const styles = StyleSheet.create({
    table:{flexDirection:'row', justifyContent:'space-between', width:'90%', alignSelf:'center', marginVertical:'5%'}
})

export default Table;