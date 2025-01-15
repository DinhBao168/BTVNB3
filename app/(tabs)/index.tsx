import { ScrollView, StyleSheet, Text, View } from "react-native"
import Index2 from "./index2";

const buoi3 = ()=>{
  return(
    // <Index2/>
    <ScrollView >
      <View style ={styles.container}>
   <Text>
    Em vào đời bằng {''}
    <Text style= {{color: 'red', fontWeight: '600'}}>
      vang đỏ
    </Text>
    <Text> anh vào đời bằng {''}</Text>
    <Text style= {{color: 'yellow', fontWeight: '600'}}>nước trà</Text>
   </Text>

   <Text>
    Bằng cơn mưa thơm {''}
    <Text style= {{fontStyle: 'italic', fontSize: 20}}>mùi đất</Text>
    <Text> và</Text>
    <Text style={{fontSize: 10, fontStyle: 'italic'}}> bằng hoa dại mọc trước nhà</Text>
   </Text>

   <Text style={{color: 'gray', fontWeight: 'bold', fontStyle: 'italic'}}>
    Em vào đời bằng kế hoạch anh vào đời bằng mộng mơ
   </Text>

   <Text>
    Lý trí em là {'    '}
    <Text style= {{textDecorationLine: 'underline'}}>
      C    ô    n    g     c     ụ
    </Text>
   </Text>
   <Text>
    Còn trái tim anh là {' '}
    <Text style= {{textDecorationLine: 'underline'}}>Đ     Ộ    N     G     C    Ơ</Text>
   </Text>

   <View style={styles.content1}>
    <Text style={{fontSize: 25}}>
      Em vào đời nhiều đồng nghiệp{'\n'}còn anh vào đời nhiều thân tình
    </Text>

   </View>

   <View style={styles.content2}>
    <Text style={{textAlign: 'center', fontSize: 20}}>
      Anh chỉ muốn chân mình đạp đất không muốn đạp ai dưới chân mình
    </Text>

   </View>

   <Text style={{fontWeight: 'bold', color: '#003399'}}>Em vào đời bằng

    <Text style={{fontWeight: 'bold', color: 'white'}}> mây trắng</Text>
    <Text style={{fontWeight: 'bold', color: '#003399'}}> em vào đời bằng</Text>
    <Text style={{fontWeight: 'bold', color: '#FF9900'}}> nắng xanh</Text>
   </Text>

   <Text style={{fontWeight: 'bold', color: '#003399'}}>Em vào đời bằng

    <Text style={{fontWeight: 'bold', color: '#FF9900'}}> đại lộ</Text>
    <Text style={{fontWeight: 'bold', color: '#003399'}}> và con đường đó giờ</Text>
    <Text style={{fontWeight: 'bold', color: 'white'}}> vắng anh</Text>
   </Text>

</View>
    </ScrollView>


  )
}

export default buoi3;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#99FFFF',
    padding: 10,
  },
  content1: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  content2:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  }
})