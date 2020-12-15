<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rule;
use App\Models\Penyakit;
use Illuminate\Support\Facades\DB;

class DiagnosaController extends Controller
{
    public function diagnosa(Request $request){
        // gejala yang diinput pengguna
        // $input_gejala = explode(',', $request->gejala);
        $input_gejala = array('G001', 'G011', 'G023', 'G024', 'G025');

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
            if($array_rule->gejala == $input_gejala){
                $id_penyakit = $array_rule->id;
            }
        }

        // Jika ditemukan, tampilkan informasi dan solusi dari penyakit
        $penyakit = Penyakit::find($id_penyakit);
        
        return response()->json($penyakit, 201);
    }
}
