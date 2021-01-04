<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rule;
use App\Models\Penyakit;
use App\Models\Gejala;
use Illuminate\Support\Facades\DB;

class DiagnosaController extends Controller
{
    public function gejala(){
        $gejala = Gejala::all();

        return response()->json($gejala, 201);
    }

    public function diagnosa(Request $request){
        // gejala yang diinput pengguna
        $input_gejala = explode(',', $request->inputGejala);
        // $input_gejala = array('G1', 'G2', 'G3', 'G4');
        for($i = 0 ; $i < count($input_gejala) ; $i++){
            $split_input_gejala = explode(' - ', $input_gejala[$i]);
            $input_gejala[$i] = $split_input_gejala[0];
        }

        // Memindahkan rule dari database ke array
        $rules = Rule::all();
        $i = 0;
        foreach( $rules as $rule){
            $array_gejala = array();
            
            $array_rules[$i] = new \stdClass();
            $array_rules[$i]->id = $rule->id;

            $array_rule = json_decode($rule, true);
            foreach( $array_rule as $key => $value){
                if($key != 'id'){
                    if($value == 1){
                        array_push($array_gejala, $key);
                        $array_rules[$i]->gejala =  $array_gejala;
                    }
                }
            }
            
            $i++;
            unset($array_gejala);
        }

        // Mencocokan array input gejala dengan array rule
        foreach($array_rules as $array_rule){

            if(count($array_rule->gejala) == count($input_gejala)){
                $total_sama = 0;
                foreach($array_rule->gejala as $r){
                    foreach($input_gejala as $i){
                        if($r == $i){
                            $total_sama += 1;
                        }
                    }
                }

                if($total_sama == count($array_rule->gejala)){
                    $id_penyakit = $array_rule->id;
                    // Jika ditemukan, tampilkan informasi dan solusi dari penyakit
                   $penyakit = Penyakit::find($id_penyakit);
           
                   return response()->json($penyakit, 201);
                }else{
                    return response()->json(false, 201);
                }
            }
        }
        
    }

    public function list_penyakit(){
        $list_penyakit = Penyakit::all();

        return response()->json($list_penyakit, 201);
    }
}
